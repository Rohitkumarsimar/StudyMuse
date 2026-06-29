import * as z from 'zod'

export const createTaskSchema = z.object({
    title : z.string().min(3),
    subject : z.string().min(3),
    due_date : z.iso.datetime()
}).strict()

export const updateTaskSchema = z.object({
    title : z.string().min(3).optional(),
    subject : z.string().min(3).optional(),
    due_date : z.string().datetime().optional(),
    is_completed:z.boolean().optional()
}).strict().refine((data)=>{
   return data.title !== undefined || data.subject !== undefined || data.due_date !== undefined || data.is_completed !== undefined
})