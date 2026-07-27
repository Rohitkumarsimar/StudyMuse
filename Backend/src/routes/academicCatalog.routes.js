import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { asyncWrap } from "../utils/asyncWrapper.js";
import { academicCatalogController } from "../controllers/academicCatalog.controller.js";

export const academicCatalogRouter = express.Router()

academicCatalogRouter.get('/',authMiddleware, asyncWrap(academicCatalogController))