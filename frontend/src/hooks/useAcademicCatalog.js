import { api } from "#api/axios.js";
import { useState } from "react";

export function useAcademicCatalog(){
    const [academicCatalog, setAcademicCatalog]= useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function getAcademicCatalog(){
        setError(null)
        setIsLoading(true)
        try{
            const result = await api.get("/academic-catalog")
            setAcademicCatalog(result.data.data)
            console.log(result.data.data)
            
        }catch(err){
            setError(err)
            console.log(err)
        }finally{
            setIsLoading(false)
        }
        
    }

    return {getAcademicCatalog, academicCatalog, error, isLoading}
}