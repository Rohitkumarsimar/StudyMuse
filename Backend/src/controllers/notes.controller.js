import {notesService}from '../services/notes.service.js';
import { response } from '../utils/apiResponse.js';
import { getNotesByStudyPlanIdService } from '../services/notes.service.js';

// Controller function to create a new note
export async function notesController(req, res, next) {
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