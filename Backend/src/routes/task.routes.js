import express from 'express'
import { createTaskSchema } from '../schemas/tasks.schema.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { asyncWrap } from '../utils/asyncWrapper.js'
import { validate } from '../middleware/validate.middleware.js'
import { createTask } from '../controllers/task.controller.js'
export const taskRouter = express.Router()

taskRouter.post('/',validate(createTaskSchema), authMiddleware, asyncWrap(createTask))


