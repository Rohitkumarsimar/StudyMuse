import { useState, useEffect } from "react";
import { api } from "../api/axios.js";


export function useTasks(){
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
        async function fetchTasks(){
            try{
            const result = await api.get('/tasks')
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
            const result = await api.post('/tasks', data)
            fetchTasks()
        }catch(err){
            console.log(err)
        }
    }

   async function deleteTask(id){
        try{
            const result = await api.delete(`/tasks/${id}`)
            fetchTasks()
        }catch(err){
            console.log(err)
        }
    }

   async function toggleComplete(id, isCompleted){
    console.log('marking: ',id,isCompleted)
        try{
            const result = await api.patch(`/tasks/${id}`,{is_completed: !isCompleted})
           fetchTasks()
        }catch(err){
            console.log(err)
        }
    }

    return {tasks, isLoading, fetchTasks, createTask, deleteTask, toggleComplete}
}