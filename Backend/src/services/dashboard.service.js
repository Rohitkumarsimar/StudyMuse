import {
  dashboardQuery,
  studyPlanCount,
  streakQuery,
} from "../db/dashboard.query.js";

import { findByEmail } from "../db/user.query.js";

// streak count logic
async function streakCount(user_id) {
  const completedTaskDates = await streakQuery(user_id);
  const dates = [
    ...new Set(
      completedTaskDates.map(
        (item) => item.completed_at.toISOString().split("T")[0],
      ),
    ),
  ];

  if (dates === 0) {
    return 0;
  }
  const latestDate = [...dates].at(-1);

  const today = new Date().toISOString().split("T")[0];

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split("T")[0];

  if (latestDate !== today && latestDate !== yesterday) {
    return 0;
  }

  let streak = 1;

  for (let i = dates.length-1; i >0; i--) {
    const current = new Date(dates[i]);
    const previous = new Date(dates[i - 1]);
    const diffInMs = current.getTime() - previous.getTime();
    const msInDay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.round(diffInMs / msInDay);

    if (diffInDays === 1) {
      streak = streak + 1;
    }else{
        break;
    }
    
  }

  return streak;
}




// final data
export async function dashboardService(user_id, email) {
  const user = await findByEmail(email)
  const userName = user.name
  const totalStudyPlans = await studyPlanCount(user_id);
  const tasksCount = await dashboardQuery(user_id);
  const streak = await streakCount(user_id);
  return { totalStudyPlans, ...tasksCount, streak, userName };
}
