//studPlan controller

import { response } from "../utils/apiResponse"

//Get all study Plans
export async function getAllStudyPlansController(req, res, next){
    const user_id = req.user.id
    const result = await getAllStudyPlansService(user_id)

    response(res, 200, result, "Study Plans fetched successfully")
}

//Get one study Plan
export async function getOneStudyPlanController(req, res, next){
    const plan_id = req.params.id
    const user_id = req.user.id
    const result = await getOneStudyPlanService(user_id, plan_id)

    response(res, 200, result, "Study Plan fetched successfully")
}

//Create study plan
export async function createStudyPlanController(req,res,next){
    const user_id = req.user.id
    const {studyPlan_type, chapter_id, title, description} = req.body
    const studyPlanCreateData = {studyPlan_type, chapter_id, title, description}
    const result = await createStudyPlanService(user_id, studyPlanCreateData)

    response(res, 201, result, "Created study plan successfully")
}

//update study Plan
export async function updateStudyPlanController(req,res,next){
    const user_id = req.uesr.id
    const plan_id = req.param.id
    const {studyPlan_type, chapter_id, title, description, completed_at} = req.body
    const studyPlanUpdateData = {studyPlan_type, chapter_id, title, description, completed_at}
    const result = await updateStudyPlanService(user_id, plan_id, studyPlanUpdateData)

    response(res, 200, result, "Created study plan successfully")
}

//delete study plan
export async function deleteStudyPlanController(req, res, next){
    const user_id = req.user.id
    const plan_id = req.params.id
    const result = await deleteStudyPlanService(user_id, plan_id)

    response(res, 200, result, ("Study Plan deleted successfully"))
}