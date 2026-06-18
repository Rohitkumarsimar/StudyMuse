import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { asyncWrap } from "../utils/asyncWrapper.js";
export const authRouter = express.Router();

authRouter.post("/register",validate(registerSchema), asyncWrap(register));

authRouter.post("/login",validate(loginSchema), login);
