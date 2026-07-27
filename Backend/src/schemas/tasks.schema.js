import * as z from 'zod'

export const createTaskSchema = z.object({
    studyPlan_id: z.string().min(5),
    title : z.string().min(3),
<<<<<<< HEAD
    due_date : z.iso.datetime().optional()
=======
    description: z.string().min(5).optional(),
>>>>>>> feature/studyPlan
}).strict()

export const updateTaskSchema = z.object({
    studyPlan_id:z.string().min(5).optional(),
    title : z.string().min(3).optional(),
<<<<<<< HEAD
    due_date : z.string().datetime().optional(),
=======
    description: z.string().min(5).optional(),
>>>>>>> feature/studyPlan
    is_completed:z.boolean().optional()
}).strict().refine((data)=>{
   return data.title !== undefined ||data.description !==undefined || data.is_completed !== undefined
})