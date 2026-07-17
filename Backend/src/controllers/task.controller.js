import { response } from "../utils/apiResponse.js"
import { createNewTask, readAllTask, updateTaskService, deleteTaskService} from "../services/task.service.js"

export async function createTask(req,res,next){
    const {title, subject, due_date}= req.body
    const user_id = req.user.id
    const result = await createNewTask(user_id, title, subject, due_date)
    return response(res,201,result,"Created a new task.")
}

export async function readTask(req, res, next){
    const user_id = req.user.id
    const result = await readAllTask(user_id)
    return response(res,200,result,"Tasks fetched successfully.")
}

export async function updateTask(req,res,next){
    const {title, subject, due_date, is_completed} = req.body
    const allowedFields = {title, subject, due_date, is_completed}
    const task_id = req.params.id
    const user_id = req.user.id
    const result = await updateTaskService(task_id, user_id, allowedFields)

    return response(res, 200, result, "Task updated successfully")
}

export async function deleteTask(req, res, next){
    const task_id = req.params.id
    const user_id = req.user.id
     await deleteTaskService(task_id, user_id)
     
    return response(res,200,null,"Deleted successfully.")
}