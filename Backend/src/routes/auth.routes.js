import express from "express";
import { register, login, profileController, editProfileController} from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema, loginSchema, profileEditSchema } from "../schemas/auth.schema.js";
import { asyncWrap } from "../utils/asyncWrapper.js";
import rateLimit from "express-rate-limit";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 8,
    message: "Too many login attempts, please try again after 15 minutes."
})

export const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), asyncWrap(register));

authRouter.post("/login", authLimiter, validate(loginSchema), asyncWrap(login));

authRouter.get("/profile",authMiddleware, asyncWrap(profileController))

authRouter.patch("/edit-profile", validate(profileEditSchema), authMiddleware ,asyncWrap(editProfileController))