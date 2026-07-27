import { response } from "../utils/apiResponse.js"
import { academicCatalogService } from "../services/academicCatalog.service.js"
export async function academicCatalogController(req, res, next){
    try{
        const result = await academicCatalogService()
        response(res,200,result, "Fetched successfully")
    }catch(e){
        console.log(e)
    }
}