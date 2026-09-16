/*
POST   /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes/:noteId
PATCH  /study-plans/:studyPlanId/notes/:noteId
DELETE /study-plans/:studyPlanId/notes/:noteId
*/

import express from 'express'

export const notesRouter = express.Router();

notesRouter.post() 