import { pool } from "../config/db.js";

// registering user
export async function insertUser(name, email, password) {
  const result = await pool.query(
    `INSERT INTO users (name, email, password) 
        VALUES ($1,$2,$3) 
        RETURNING id, name, email, created_at`,
    [name, email, password],
  );
  return result.rows[0];
}

// finding email
export async function findByEmail(email) {
  const result = await pool.query(`SELECT * FROM users WHERE email = $1`, 
    [email],
  );
  return result.rows[0];
}

// fetch profile
export async function profileQuery(user_id) {
  const result = await pool.query(
    `SELECT name, email FROM users WHERE id = $1`,
    [user_id],
  );
  return result.rows[0];
}
