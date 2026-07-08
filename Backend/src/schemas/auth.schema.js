import * as z from "zod";

//creating rules for user register and login using zod
export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
}).strict();

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
}).strict();

export const profileEditSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional()
}).strict().refine((data)=>{
 return data.name !== undefined || data.email !== undefined
})

export const verifyOtpSchema = z.object({
  email: z.string().email(),
  otp : z.string().min(6)
}).strict()

export const passwordResetSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).optional()
}).strict()

export const resendOtpSchema = z.object({
  email: z.string().email(),
  type: z.enum(["VERIFY_EMAIL", "PASSWORD_RESET"])
}).strict()