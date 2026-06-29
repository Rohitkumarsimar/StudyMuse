import { prisma } from "../config/prisma.js"
import { Prisma } from "@prisma/client"

export async function dashboardQuery(user_id){
    const result = await prisma.$queryRaw`SELECT
        CAST( COUNT(*)AS INT) AS total_tasks,
        CAST( COUNT( CASE WHEN is_completed = true THEN 1 END) AS INT) AS completed_tasks,
        CAST( COUNT( CASE WHEN is_completed = false THEN 1 END) AS INT) AS pending_tasks,
        CAST( ROUND( COUNT(CASE WHEN is_completed = true THEN 1 END)/ NULLIF(COUNT(*)::NUMERIC, 0) *100, 2) AS INT) AS completion_rate
        FROM tasks
        WHERE user_id = ${Prisma.sql`${user_id}::uuid`}`

        return result[0]
}

export async function streakQuery(user_id){
    const result = await prisma.$queryRaw`
        WITH completed_dates AS(
        SELECT DISTINCT DATE(completed_at) AS completed_date
        FROM tasks
        WHERE user_id = ${Prisma.sql`${user_id}::uuid`} AND completed_at IS NOT NULL
        ),
        with_gaps AS(
        SELECT completed_date,
        completed_date - LAG(completed_date) OVER (ORDER BY completed_date) AS gap
        FROM completed_dates
        ),
        streak_count AS(
        SELECT 
        COALESCE(MAX(completed_date),'1900-01-01') AS streak_start
        FROM with_gaps
        WHERE gap != 1 OR gap IS NULL
        )
        SELECT
        CAST( CASE WHEN MAX(completed_date) >= CURRENT_DATE - 1 THEN COUNT(*) ELSE 0 END AS INT) AS streak
        FROM with_gaps, streak_count
        WHERE completed_date > streak_start
        `

        return result[0]
}