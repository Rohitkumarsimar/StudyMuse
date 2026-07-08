import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  message: "Too many login attempts, please try again after 15 minutes.",
});

export const otpLimitter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,
  message: "Please wait for 1 minute!",
});