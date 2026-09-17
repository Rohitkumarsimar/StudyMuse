import { notesQuery } from "../db/notes.query.js";
export async function notesService(studyPlan_id, text) {
    const result = await notesQuery( studyPlan_id, text);
    return result;
}