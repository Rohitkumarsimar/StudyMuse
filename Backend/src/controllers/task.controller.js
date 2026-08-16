import { response } from "../utils/apiResponse.js"
import { createNewTask, readAllTask, updateTaskService, deleteTaskService} from "../services/task.service.js"

export async function createTask(req,res,next){
  try{  const {studyPlan_id, title, description, is_completed}= req.body
  console.log(req.body)
    const createNewTaskData = {studyPlan_id, title, description, is_completed}
    const result = await createNewTask(createNewTaskData)
    return response(res,201,result,"Created a new task.")}catch(e){console.log(e)}
}

export async function readTask(req, res, next){
   try{ const studyPlan_id = req.params.studyPlan_id
    const result = await readAllTask(studyPlan_id)
    return response(res,200,result,"Tasks fetched successfully.")}catch(e){console.log(e)}
}

export async function updateTask(req,res,next){
    console.log(req.params)
 try{   const {studyPlan_id, formData, is_completed} = req.body
    const allowedFields = {studyPlan_id, title, description, is_completed}
    const task_id = req.params.id
    const result = await updateTaskService(task_id, allowedFields)

    return response(res, 200, result, "Task updated successfully")}catch(e){console.log(e)}
}

export async function deleteTask(req, res, next){
   try {const task_id = req.params.id
    const studyPlan_id = req.params.studyPlan_id
     await deleteTaskService(task_id, studyPlan_id)
     
    return response(res,200,null,"Deleted successfully.")}catch(e){console.log(e)}
}