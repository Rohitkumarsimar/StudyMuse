import { prisma } from "../config/prisma.js";

//create task query
export async function insertTask(user_id, title, subject, due_date) {
  const result = await prisma.tasks.create({
    data: {
      user_id: user_id,
      title: title,
      subject: subject,
      due_date: due_date,
    },
  });
  return result;
}

// get tasks query
export async function fetchTasks(user_id) {
  const result = await prisma.tasks.findMany({
    where: { user_id: user_id },
  });
  return result;
}

// update task query
export async function updateTaskQuery(task_id, user_id, allowedFields) {
  const checkTask = await prisma.tasks.findUnique({
    where: { id: task_id },
  });
  if (!checkTask) return null;
  if (checkTask.user_id !== user_id) return null;

  const result = await prisma.tasks.update({
    where: {
      id: task_id,
    },
    data: {
      title: allowedFields.title,
      subject: allowedFields.subject,
      due_date: allowedFields.due_date,
      is_completed: allowedFields.is_completed,

      ...(allowedFields.is_completed !== undefined
        ? { completed_at: allowedFields.is_completed ? new Date() : null }
        : {}),
    },
  });

  return result;
}

//delete task query
export async function deleteTaskQuery(task_id, user_id) {
  const checkTask = await prisma.tasks.findUnique({
    where: { id: task_id },
  });
  if (!checkTask) return null;
  if (checkTask.user_id !== user_id) return null;
  const result = await prisma.tasks.delete({
    where: {
      id: task_id
    },
  });
  return result;
}
