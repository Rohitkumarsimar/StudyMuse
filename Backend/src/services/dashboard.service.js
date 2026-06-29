import { dashboardQuery, streakQuery } from "../db/dashboard.query.js";

export async function dashboardService(user_id){
    const stats = await dashboardQuery(user_id)
    const streak = await streakQuery(user_id)
    return {...stats, streak: streak.streak}
}