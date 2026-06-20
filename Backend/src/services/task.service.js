import { insertTask } from "../db/task.query.js"

export async function createNewTask(user_id, title, subject, due_date){
    return insertTask(user_id,title,subject,due_date)
}