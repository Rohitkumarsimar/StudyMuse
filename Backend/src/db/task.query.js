import { pool } from "../config/db.js";

export async function insertTask(user_id,title,subject,due_date){
    const result = await pool.query(
        `INSERT INTO tasks (user_id,title,subject,due_date) VALUES ($1,$2,$3,$4) RETURNING id, title, subject, due_date, is_completed, created_at`,
        [user_id,title,subject,due_date]
    )
    return result.rows[0]
}