/*
POST   /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes/:noteId
PATCH  /study-plans/:studyPlanId/notes/:noteId
DELETE /study-plans/:studyPlanId/notes/:noteId
*/

//Here, in notes feature, I will use github autocomplete feature to generate the code snippets, so function names might sound weird.

import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js';
import { textSchema } from '../schemas/notes.schema.js';
import { validate } from '../middleware/validate.middleware.js';
import { createNotesController, getNotesByStudyPlanIdController, getNotesByNoteIdController  } from '../controllers/notes.controller.js';
import { asyncWrap } from '../utils/asyncWrapper.js';

export const notesRouter = express.Router();

// Route to create a new note for a specific study plan
notesRouter.post("/:studyPlan_id/notes", validate(textSchema), authMiddleware, asyncWrap(createNotesController)) 

// Route to get all notes for a specific study plan
notesRouter.get("/:studyPlan_id/notes", authMiddleware, asyncWrap(getNotesByStudyPlanIdController))

// Route to get a specific note by its ID for a specific study plan
notesRouter.get("/:studyPlan_id/notes/:noteId", authMiddleware, asyncWrap(getNotesByNoteIdController))