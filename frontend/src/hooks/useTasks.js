import { useState, useEffect } from "react";
import { api } from "../api/axios.js";
export function useTasks(){
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
        async function fetchTasks(studyPlan_id){
            try{
            const result = await api.get(`tasks/${studyPlan_id}`)
            setTasks(result.data.data)
            } catch(err){
            console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
    
 useEffect(()=>{
    fetchTasks()
 },[])

    async function createTask(data){
        try{
            console.log(data)
            const result = await api.post('/tasks', data)
            fetchTasks(data.studyPlan_id)
        }catch(err){
            console.log(err)
        }
    }

   async function deleteTask(id, studyPlan_id){
        try{
            console.log("del studyplan id: ", studyPlan_id)
            const result = await api.delete(`/tasks/${id}/${studyPlan_id}`)
            fetchTasks(studyPlan_id)
        }catch(err){
            console.log(err)
        }
    }

   async function toggleComplete(id, studyPlan_id, isCompleted){
        try{
            const result = await api.patch(`/tasks/${id}`,{studyPlan_id: studyPlan_id, is_completed: !isCompleted})
           fetchTasks(studyPlan_id)
        }catch(err){
            console.log(err)
        }
    }

    return {tasks, isLoading, fetchTasks, createTask, deleteTask, toggleComplete}
}