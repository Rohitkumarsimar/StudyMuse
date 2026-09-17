import { prisma } from "../config/prisma.js";
export async function notesQuery(studyPlan_id, text) {
  const result = await prisma.notes.create({
    data: {
      studyPlan_id,
      text,
    },
  });
  return result;
}