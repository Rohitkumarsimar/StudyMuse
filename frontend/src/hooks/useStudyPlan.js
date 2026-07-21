import { useState, useEffect } from "react";
import { api } from "../api/axios.js";

/*{
    useStudyPlans

├── getAllStudyPlans()
├── createStudyPlan()
├── updateStudyPlan()
├── deleteStudyPlan()
├── searchStudyPlans()
├── loading
├── error
└── studyPlans state
}*/

export function useStudyPlan(){
    const [studyPlans, setStudyPlans] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function getAllStudyPlans(){
        setError(null)
        try{
            setIsLoading(true)
            const result = await api.get('/studyPlan')
            setStudyPlans(result.data.data)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getAllStudyPlans()
    },[])

    async function createStudyPlan(data){
        setError(null)
        try{
            setIsLoading(true)
            const result = await api.post('/studyPlan',data)
            setStudyPlans(prev=>[...prev,result.data.data])
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

}