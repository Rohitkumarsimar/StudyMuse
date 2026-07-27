import { insertTask, fetchTasks, updateTaskQuery, deleteTaskQuery } from "../db/task.query.js"
import { ApiError } from "../utils/AppError.js"
import { response } from "../utils/apiResponse.js"

//Create new task
<<<<<<< HEAD
export async function createNewTask(user_id, title, due_date){
    return insertTask(user_id,title,due_date)
=======
export async function createNewTask(createNewTaskData){
    return insertTask(createNewTaskData)
>>>>>>> feature/studyPlan
}

// get all tasks
export async function readAllTask(studyPlan_id){
    return fetchTasks(studyPlan_id)
}

//Update task
export async function updateTaskService(task_id,  allowedFields){
    const update = await updateTaskQuery(task_id, allowedFields)
    if(!update){
        throw new ApiError(404, "Task not found!")
    }
    return update
}

//Delete task
export async function deleteTaskService(task_id,studPlan_id){
    const result =await deleteTaskQuery(task_id,studPlan_id)
    if(!result){
        throw new ApiError(404, "Task not found!")
    }
    return result
}