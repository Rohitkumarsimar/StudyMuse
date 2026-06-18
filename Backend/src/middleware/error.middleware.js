import { ApiError } from "../utils/AppError.js";

export function errorMiddleware(err, req, res, next){
    console.log(err)
    console.log(err instanceof ApiError)
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({message: err.message})
    }
    return res.status(500).json({message: "Internal server error"});
}