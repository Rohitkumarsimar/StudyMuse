import express from 'express'
import { createTaskSchema, updateTaskSchema } from '../schemas/tasks.schema.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { asyncWrap } from '../utils/asyncWrapper.js'
import { validate } from '../middleware/validate.middleware.js'
import { createTask, readTask, updateTask, deleteTask } from '../controllers/task.controller.js'
export const taskRouter = express.Router()

taskRouter.post('/',validate(createTaskSchema), authMiddleware, asyncWrap(createTask))

taskRouter.get('/',authMiddleware, asyncWrap(readTask))

taskRouter.patch('/:id',validate(updateTaskSchema),authMiddleware,asyncWrap(updateTask))

taskRouter.delete('/:id',authMiddleware, asyncWrap(deleteTask))
