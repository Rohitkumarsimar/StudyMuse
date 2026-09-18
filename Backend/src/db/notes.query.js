import { prisma } from "../config/prisma.js";

// Create a new note
export async function notesQuery(studyPlan_id, text) {
  const result = await prisma.notes.create({
    data: {
      studyPlan_id,
      text,
    },
  });
  return result;
}

// Get all notes for a specific study plan
export async function getNotesByStudyPlanIdQuery(studyPlan_id) {
  const result = await prisma.notes.findMany({
    where: {
      studyPlan_id,
    },
  });
  return result;
} 