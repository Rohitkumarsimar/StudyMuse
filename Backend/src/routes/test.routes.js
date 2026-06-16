import { testRoute } from "../controllers/test.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import express from "express";

// creating test router
export const testRouter = express.Router();

testRouter.get("/testApi", authMiddleware, testRoute);
