import express from "express";
import {
  register,
  login,
  profileController,
  editProfileController,
  verifyOtpController,
  passwordResetOtpController,
  passwordResetController,
  resendOtpController,
  googleAuthController,
} from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import {
  registerSchema,
  loginSchema,
  profileEditSchema,
  verifyOtpSchema,
  passwordResetSchema,
  resendOtpSchema,
} from "../schemas/auth.schema.js";
import { asyncWrap } from "../utils/asyncWrapper.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { authLimiter, otpLimitter } from "../utils/rateLimitter.js";



export const authRouter = express.Router();

authRouter.post(
  "/register",
  authLimiter,
  validate(registerSchema),
  asyncWrap(register),
);

authRouter.post("/login",authLimiter, validate(loginSchema), asyncWrap(login));

authRouter.get("/profile", authMiddleware, asyncWrap(profileController));

authRouter.patch(
  "/edit-profile",
  validate(profileEditSchema),
  authMiddleware,
  asyncWrap(editProfileController),
);

authRouter.post(
  "/password-reset-otp",
  validate(passwordResetSchema),
  asyncWrap(passwordResetOtpController),
);

authRouter.post(
  "/password-reset",
  validate(passwordResetSchema),
  asyncWrap(passwordResetController),
);

authRouter.post(
  "/verify-otp",
  validate(verifyOtpSchema),
  asyncWrap(verifyOtpController),
);

authRouter.post(
  "/resend-otp",
  otpLimitter,
  validate(resendOtpSchema),
  asyncWrap(resendOtpController),
);

authRouter.post("/googleAuth", asyncWrap(googleAuthController));
