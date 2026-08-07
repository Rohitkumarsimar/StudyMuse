import { dashboardService } from "../services/dashboard.service.js";
import { response } from "../utils/apiResponse.js";

export async function dashboardController(req,res,next){
    try{
    const user_id = req.user.id
    const email = req.user.email
    const result  = await dashboardService(user_id, email)
    return response(res,200,result,"Dashboard fetched successfully.")
    }catch(err){
        console.log(err)
    }
}