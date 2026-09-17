import * as z from 'zod'

export const textSchema = z.object({
    text: z.string().min(1, { message: "Text is required" }),
})