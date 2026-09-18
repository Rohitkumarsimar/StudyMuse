import { notesQuery } from "../db/notes.query.js";
import { getNotesByStudyPlanIdQuery} from "../db/notes.query.js";

// Service function to create a new note
export async function notesService(studyPlan_id, text) {
    const result = await notesQuery( studyPlan_id, text);
    return result;
}

// Service function to get all notes for a specific study plan
export async function getNotesByStudyPlanIdService(studyPlan_id) {
    const result = await getNotesByStudyPlanIdQuery(studyPlan_id);
    return result;
}