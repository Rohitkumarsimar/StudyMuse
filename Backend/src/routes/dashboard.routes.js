import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { asyncWrap } from '../utils/asyncWrapper.js'
import { dashboardController } from '../controllers/dashboard.controller.js'

export const dashboardRouter = express.Router()

dashboardRouter.get('/', authMiddleware, asyncWrap(dashboardController))