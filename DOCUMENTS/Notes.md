## Endpoints: 
POST   /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes/:noteId
PATCH  /study-plans/:studyPlanId/notes/:noteId
DELETE /study-plans/:studyPlanId/notes/:noteId


## File flow:
-Note API contract — endpoints, request/response shapes.
-File upload strategy — Backend → S3, or frontend direct upload using presigned URLs.
-File validation — allowed MIME types, size limits, filename handling.
-Authorization — user → study plan → note → attachment ownership.
-S3/CloudFront structure — bucket, object-key convention, private access, signed URLs.
-Failure handling — especially S3 succeeds but DB fails, or vice versa.
-Update/delete semantics — what happens to attachments when a note is edited/deleted.
-Frontend UX — editor, attachments, previews, upload progress, loading/error states.

---
<br></br>
## File Validation: 
Before generating the presigned URL, the backend should decide:

File type: allow only image/*, PDF, and your planned Word document types.
File size: set a maximum, e.g. 10–20 MB per file.
File count: decide how many attachments a note can have.
Filename: don't trust the user's original filename for your S3 key.
Content type: ensure the claimed MIME type is one we actually allow.

The important part with presigned uploads:

React
 ↓
Backend
 ↓
Validate upload request
 ↓
Generate presigned URL
 ↓
React → S3

---

<br></br>
## Authorization: 

When user clicks create notes: 

```
POST /study-plans/:studyPlanId/notes
        ↓
JWT → userId
        ↓
verify user owns studyPlan
        ↓
create Note row
        ↓
return noteId
```

For text:

```
PATCH /study-plans/:studyPlanId/notes/:noteId
```

For a file:

```
request presigned URL
        ↓
backend verifies user → studyPlan → note
        ↓
React uploads directly → S3
        ↓
React tells backend upload completed
        ↓
backend creates NoteAttachment
```

```text
Create Note
   ↓
POST /study-plans/:studyPlanId/notes
   ↓
Create Note row
   ↓
Return note metadata + noteId
```

From there, the frontend operates inside that **specific note**:

```text
noteId
 ├── update text
 ├── request upload URL
 ├── add attachment
 ├── remove attachment
 └── delete note
```

And every operation can verify:

```text
JWT → userId
       ↓
studyPlanId → ownership
       ↓
noteId → belongs to that study plan
```

Simple, secure, and easy to reason about.


---
<br></br>

## Failure handling: 
Yep. That gives us a simple recovery strategy:

```text
S3 upload ✅
   ↓
Backend DB operation ❌
   ↓
Backend deletes S3 object using key
   ↓
Return error
   ↓
React tells user → retry
```

One caveat: **the cleanup deletion can also fail**. If S3 upload succeeds and both the DB operation and cleanup fail, we have an orphaned object.

For now, that's a reasonable edge case to acknowledge rather than over-engineer.

So I'd mark **failure handling as designed**. Next, we can move to **update/delete semantics**.

---
<br></br>

## Update/Delete semantics

For update:

PATCH Note
→ update text
→ save

No attachment changes are mixed into that operation.

For attachment add:

Presigned URL → S3 upload → DB metadata

For attachment delete:

DB → get key
   ↓
S3 → delete file
   ↓
DB → delete metadata

For note delete, you're right—that's the interesting one:

DELETE Note
   ↓
Get all attachments
   ↓
Delete all S3 objects concurrently
   ↓
Delete Note
   ↓
CASCADE → NoteAttachment rows