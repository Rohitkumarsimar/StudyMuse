import { ApiError } from "../utils/AppError.js";
import {
  getAllStudyPlanQuery,
  getOneStudyPlanQuery,
  createStudyPlanQuery,
  updateStudyPlanQuery,
  deleteStudyPlanQuery,
  findByPlanId,
  findByChapterId,
} from "../db/studyPlan.query.js";

// get all study plan
export async function getAllStudyPlansService(user_id) {
  const result = await getAllStudyPlanQuery(user_id);
  if (result === []) {
    throw new ApiError(404, "No Study plans exist!");
  }
  return result;
}

// get one study plan
export async function getOneStudyPlansService(user_id, plan_id) {
  const result = await getOneStudyPlanQuery(user_id, plan_id);
  if (!result) {
    throw new ApiError(404, "Study plan not found!");
  }
  return result;
}

// create study plan service
export async function createStudyPlanService(user_id, studyPlanCreateData) {
  //studyPlan_type, chapter_id, title, description

  if (
    studyPlanCreateData.studyPlan_type !== "ACADEMIC" &&
    studyPlanCreateData.studyPlan_type !== "CUSTOM"
  ) {
    throw new ApiError(400, "Enter valid data!");
  }

  if (studyPlanCreateData.studyPlan_type === "ACADEMIC") {
    if(studyPlanCreateData.title){
      throw new ApiError(400, "Please enter valid data!")
    }
    const chapter = await findByChapterId(studyPlanCreateData.chapter_id);
    if (!chapter) {
      throw new ApiError(400, "Chapter does not exists!");
    }
    const createAcademicPlanData = {
      studyPlan_type: studyPlanCreateData.studyPlan_type,
      chapter_id: studyPlanCreateData.chapter_id,
      title: chapter.name,
      description: studyPlanCreateData.description
    }

     const result = await createStudyPlanQuery(user_id, createAcademicPlanData);
  return result;
  }

  if (studyPlanCreateData.studyPlan_type === "CUSTOM") {
    if (studyPlanCreateData.chapter_id || !studyPlanCreateData.title) {
      throw new ApiError(400, "Please enter a valid Data!");
    }
  }

  const result = await createStudyPlanQuery(user_id, studyPlanCreateData);
  return result;
}

//update study plan service
export async function updateStudyPlanService(
  user_id,
  plan_id,
  studyPlanUpdateData,
) {
  const plan = await findByPlanId(plan_id);
  if (!plan) {
    throw new ApiError(404, "study plan does not exist!");
  }

  // ACADEMIC study plan update:
  if (plan.studyPlan_type === "ACADEMIC") {
    if (studyPlanUpdateData.title) {
      throw new ApiError(400, "Enter valid data!");
    }

    const academicPlanUpdateData = {
      description: studyPlanUpdateData.description,
      completed_at: studyPlanUpdateData.completed_at,
    };
    const result = await updateStudyPlanQuery(
      user_id,
      plan_id,
      academicPlanUpdateData,
    );

    if (!result) {
      throw new ApiError(400, "Failed in updating Study plan!");
    }
    return result;
  }

  // custom study plan update
  const customStudyPlanUpdateData = {
    title: studyPlanUpdateData.title,
    description: studyPlanUpdateData.description,
    completed_at: studyPlanUpdateData.completed_at,
  };

  const result = await updateStudyPlanQuery(
    user_id,
    plan_id,
    customStudyPlanUpdateData,
  );

  if (!result) {
    throw new ApiError(400, "Failed in updating Study plan!");
  }
  return result;
}

//delete study plan service
export async function deleteStudyPlanService(user_id, plan_id) {
  const result = await deleteStudyPlanQuery(user_id, plan_id);
  if (!result) {
    throw new ApiError(400, "Failed in deleting the Study plan!");
  }
  return result;
}
