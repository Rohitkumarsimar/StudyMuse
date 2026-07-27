import { prisma } from "../config/prisma.js";

//create task query
<<<<<<< HEAD
export async function insertTask(user_id, title, due_date) {
=======
export async function insertTask(createNewTaskData) {
>>>>>>> feature/studyPlan
  const result = await prisma.tasks.create({
    data: {
      studyPlan_id:createNewTaskData.studyPlan_id,
      title: createNewTaskData.title,
      description: createNewTaskData.description
    },
  });
  return result;
}

// get tasks query
export async function fetchTasks(studyPlan_id) {
  const result = await prisma.tasks.findMany({
    where: { studyPlan_id: studyPlan_id },
  });
  return result;
}

// update task query
export async function updateTaskQuery(task_id,  allowedFields) {
  const checkTask = await prisma.tasks.findUnique({
    where: { id: task_id },
  });
  if (!checkTask) return null;
  if (checkTask.studyPlan_id !== allowedFields.studyPlan_id) return null;

  const result = await prisma.tasks.update({
    where: {
      id: task_id,
    },
    data: {
      title: allowedFields.title,
    description: allowedFields.description,
      is_completed: allowedFields.is_completed,

      ...(allowedFields.is_completed !== undefined
        ? { completed_at: allowedFields.is_completed ? new Date() : null }
        : {}),
    },
  });

  return result;
}

//delete task query
export async function deleteTaskQuery(task_id, studPlan_id) {
  const checkTask = await prisma.tasks.findUnique({
    where: { id: task_id },
  });
  if (!checkTask) return null;
  if (checkTask.studyPlan_id !== studPlan_id) return null;
  const result = await prisma.tasks.delete({
    where: {
      id: task_id
    },
  });
  return result;
}
