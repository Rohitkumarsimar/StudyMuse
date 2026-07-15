import { dashboardService } from "../services/dashboard.service.js";
import { response } from "../utils/apiResponse.js";

export async function dashboardController(req,res,next){
    try{
    const user_id = req.user.id
    const result  = await dashboardService(user_id)
    return response(res,200,result,"Dashboard fetched successfully.")
    }catch(err){
        console.log(err)
    }
}