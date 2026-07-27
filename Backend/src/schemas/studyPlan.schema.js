import * as z from "zod";

//create study plan schema validator
export const createStudyPlanSchema = z
  .object({
    studyPlan_type: z.enum(["ACADEMIC", "CUSTOM"]),
    chapter_id: z.string().min(5).optional(),
    title: z.string().min(2).max(255).optional(),
    description: z.string().max(500),
  })
  .strict()
  .refine((data) => {
    return data.chapter_id !== undefined || data.title !== undefined;
  });

//update study plan schema:
export const updateStudyPlanSchema = z
  .object({
    title: z.string().min(2).max(255).optional(),
    description: z.string().max(500).optional(),
    completed_at: z.string().datetime().optional(),
  })
  .strict()
  .refine((data) => {
    return (
      data.title !== undefined ||
      data.description !== undefined ||
      data.completed_at !== undefined
    );
  });
