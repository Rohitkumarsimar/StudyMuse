import { response } from "../utils/apiResponse.js"
import { createNewTask } from "../services/task.service.js"
export async function createTask(req,res,next){
    const {title, subject, due_date}= req.body
    const user_id = req.user.id
    const result = await createNewTask(user_id, title, subject, due_date)
    return response(res,201,result,"Created a new task.")
}