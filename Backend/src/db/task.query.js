import { pool } from "../config/db.js";

//create task query
export async function insertTask(user_id,title,subject,due_date){
    const result = await pool.query(
        `INSERT INTO tasks (user_id,title,subject,due_date) VALUES ($1,$2,$3,$4) RETURNING id, title, subject, due_date, is_completed, created_at`,
        [user_id,title,subject,due_date]
    )
    return result.rows[0]
}

// get tasks query
export async function fetchTasks(user_id){
    const result = await pool.query(
        `SELECT * FROM tasks WHERE user_id = $1`, [user_id]
    )
    return result.rows
}

// update task query
export async function updateTaskQuery(task_id, user_id, incomingData){
    const mappedData = incomingData.map(([key, value],index)=> `${key} = $${index+3}`)
    const mappedValues = incomingData.map(([,values])=>values)

    const completedField = incomingData.find(([key,value])=> key === "is_completed")
    if(completedField){
        const value = completedField[1] // true or false
        if(value==true){
            mappedData.push("completed_at = NOW()")
        }else{
            mappedData.push("completed_at = NULL")
        }
        
    }

    const result = await pool.query(`UPDATE tasks SET ${mappedData} WHERE id = $1 AND user_id = $2 RETURNING *`, [task_id, user_id, ...mappedValues])
    return result.rows[0]
}

//delete task query
export async function deleteTaskQuery(task_id,user_id){
    const result = await pool.query(`DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *`,[task_id, user_id])
    return result.rows[0]
}