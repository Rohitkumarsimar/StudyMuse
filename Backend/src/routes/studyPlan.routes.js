// studyPlan crud
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { asyncWrap } from "../utils/asyncWrapper.js";
import {
  getAllStudyPlansController,
  getOneStudyPlanController,
  createStudyPlanController,
  updateStudyPlanController,
  deleteStudyPlanController,
} from "../controllers/studyPlan.controller.js";

export const studyPlanRouter = express.Router();

studyPlanRouter.get("/", authMiddleware, asyncWrap(getAllStudyPlansController));

studyPlanRouter.get("/:id", authMiddleware, asyncWrap(getOneStudyPlanController));

studyPlanRouter.post("/", authMiddleware, asyncWrap(createStudyPlanController));

studyPlanRouter.patch("/:id", authMiddleware, asyncWrap(updateStudyPlanController));

studyPlanRouter.delete("/:id", authMiddleware, asyncWrap(deleteStudyPlanController));
