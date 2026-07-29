import { prisma } from "../config/prisma.js";
import { Prisma } from "@prisma/client";

export async function dashboardQuery(user_id) {
  const [totalTasks, completedTasks, pendingTasks ] =
    await prisma.$transaction([
      prisma.tasks.count({
        where: {
          studyPlan: {
            user_id: user_id,
          },
        },
      }),

      prisma.tasks.count({
        where: {
          studyPlan: {
            user_id: user_id,
          },
          is_completed: true,
        },
      }),
      prisma.tasks.count({
        where: {
          studyPlan: {
            user_id: user_id,
          },
          is_completed: false,
        },
      }),
    ]);

  return { totalTasks, completedTasks, pendingTasks };
}

export async function studyPlanCount(user_id) {
  const result = await prisma.studyPlan.count({
    where: {
      user_id
    },
  });
  return result;
}




export async function streakQuery(user_id){
    const result = await prisma.tasks.findMany({
        where:{
            studyPlan:{
                user_id
            },
            completed_at:{
                not: null
            }
        },

        select:{
            completed_at: true
        },
        orderBy:{
            completed_at: "asc"
        }
    })

    return result
}

