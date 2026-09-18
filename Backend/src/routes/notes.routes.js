/*
POST   /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes
GET    /study-plans/:studyPlanId/notes/:noteId
PATCH  /study-plans/:studyPlanId/notes/:noteId
DELETE /study-plans/:studyPlanId/notes/:noteId
*/

import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js';
import { textSchema } from '../schemas/notes.schema.js';
import { validate } from '../middleware/validate.middleware.js';
import { notesController } from '../controllers/notes.controller.js';
import { asyncWrap } from '../utils/asyncWrapper.js';
import { getNotesByStudyPlanIdController } from '../controllers/notes.controller.js';

export const notesRouter = express.Router();

// Route to create a new note for a specific study plan
notesRouter.post("/:studyPlan_id/notes", validate(textSchema), authMiddleware, asyncWrap(notesController)) 

// Route to get all notes for a specific study plan
notesRouter.get("/:studyPlan_id/notes", authMiddleware, asyncWrap(getNotesByStudyPlanIdController))