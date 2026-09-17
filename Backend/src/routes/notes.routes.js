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

export const notesRouter = express.Router();

notesRouter.post("/:studyPlan_id/notes", validate(textSchema), authMiddleware, asyncWrap(notesController)) 