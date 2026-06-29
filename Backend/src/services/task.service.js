import { insertTask, fetchTasks, updateTaskQuery, deleteTaskQuery } from "../db/task.query.js"
import { ApiError } from "../utils/AppError.js"
import { response } from "../utils/apiResponse.js"

//Create new task
export async function createNewTask(user_id, title, subject, due_date){
    return insertTask(user_id,title,subject,due_date)
}

// get all tasks
export async function readAllTask(user_id){
    return fetchTasks(user_id)
}

//Update task
export async function updateTaskService(task_id, user_id, allowedFields){
    const update = await updateTaskQuery(task_id, user_id, allowedFields)
    if(!update){
        throw new ApiError(404, "Task not found!")
    }
    return update
}

//Delete task
export async function deleteTaskService(task_id,user_id){
    const result =await deleteTaskQuery(task_id,user_id)
    if(!result){
        throw new ApiError(404, "Task not found!")
    }
    return result
}