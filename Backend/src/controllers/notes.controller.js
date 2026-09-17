import {notesService}from '../services/notes.service.js';
import { response } from '../utils/apiResponse.js';
export async function notesController(req, res, next) {
    try{
    const { studyPlan_id } = req.params;
    const { text } = req.body;

    const result = await notesService( studyPlan_id, text);
    return response(res, 200, "Note created successfully", result);}catch(error){
        console.log(error);
    }
}

