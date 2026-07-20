import {prisma} from "../config/prisma.js";

//find plan by id: 
export async function findByPlanId(plan_id){
    const result = await prisma.studyPlan.findUnique({
        where:{
            id: plan_id
        }
    })
    return result
}

//find chapter by id: 
export async function findByChapterId(chapter_id){
    const result = await prisma.chapter.findUnique({
        where: {
            id: chapter_id
        }
    })
    return result
}

// get all study plans:
export async function getAllStudyPlanQuery(user_id) {
  const result = await prisma.studyPlan.findMany({
    where: {
      user_id: user_id,
    },
  });
  return result;
}

//get one conversation:
export async function getOneStudyPlanQuery(user_id, plan_id) {
  const result = await prisma.studyPlan.findFirst({
    where: {
      user_id: user_id,
      id: plan_id,
    },
  });

  return result;
}

// create study plan
export async function createStudyPlanQuery(user_id, studyPlanCreateData) {
  const result = await prisma.studyPlan.create({
    data: {
      // studyPlan_type, chapter_id, title, description
      user_id:user_id,
      studyPlan_type: studyPlanCreateData.studyPlan_type,
      chapter_id: studyPlanCreateData.chapter_Id,
      title: studyPlanCreateData.title,
      description: studyPlanCreateData.description,
    },
  });
  return result;
}

//update study plan
export async function updateStudyPlanQuery(
  user_id,
  plan_id,
  studyPlanUpdateData,
) {
  const checkPlan = await prisma.studyPlan.findUnique({
    where: {
      id: plan_id,
    },
  });

  if (!checkPlan) return null;
  if (checkPlan.user_id !== user_id) return null;

  const result = await prisma.studyPlan.update({
    where: {
      id: plan_id,
    },
    data: {
        title: studyPlanUpdateData.title,
        description: studyPlanUpdateData.description,
        completed_at: studyPlanUpdateData.completed_at
    },
  });
  return result
}

// delete study plan
export async function deleteStudyPlanQuery(user_id, plan_id){
     const checkPlan = await prisma.studyPlan.findUnique({
    where: {
      id: plan_id,
    },
  });

  if (!checkPlan) return null;
  if (checkPlan.user_id !== user_id) return null;


  const result = await prisma.studyPlan.delete({
    where: {
        id: plan_id
    }
  })
  return result
}