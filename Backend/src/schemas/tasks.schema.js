import * as z from 'zod'

export const createTaskSchema = z.object({
    title : z.string().min(3),
    subject : z.string().min(3),
    due_date : z.string()
}).strict()