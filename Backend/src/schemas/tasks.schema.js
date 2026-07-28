import * as z from 'zod'

export const createTaskSchema = z.object({
    studyPlan_id: z.string().min(5),
    title : z.string().min(3),
    description: z.string().min(5).optional(),
}).strict()

export const updateTaskSchema = z.object({
    studyPlan_id:z.string().min(5).optional(),
    title : z.string().min(3).optional(),
    description: z.string().min(5).optional(),
    is_completed:z.boolean().optional()
}).strict().refine((data)=>{
   return data.title !== undefined ||data.description !==undefined || data.is_completed !== undefined
})