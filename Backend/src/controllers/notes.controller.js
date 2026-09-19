import {notesService, getNotesByStudyPlanIdService, getNotesByNoteIdService}from '../services/notes.service.js';
import { response } from '../utils/apiResponse.js';

// Controller function to create a new note
export async function createNotesController(req, res, next) {
    try{
    const { studyPlan_id } = req.params;
    const { text } = req.body;

    const result = await notesService( studyPlan_id, text);
    return response(res, 200, "Note created successfully", result);}catch(error){
        console.log(error);
    }
}

// Controller function to get all notes for a specific study plan
export async function getNotesByStudyPlanIdController(req, res, next) {
    try{
    const { studyPlan_id } = req.params;

    const result = await getNotesByStudyPlanIdService(studyPlan_id);
    return response(res, 200, "Notes retrieved successfully", result);}catch(error){
        console.log(error);
    }
}

// Controller function to get a specific note by its ID for a specific study plan
export async function getNotesByNoteIdController(req, res, next) {
    const {studyPlan_id, noteId} = req.params;
    const result = await getNotesByNoteIdService(studyPlan_id, noteId);
    return response(res, 200, "Note retrieved successfully", result);
}