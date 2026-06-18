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
