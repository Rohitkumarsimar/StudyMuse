import { useState, useEffect } from "react";
import { api } from "../api/axios.js";

export default function Dashboard(){
    const [stat, setStat] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchStats(){
            try{
           const result = await api.get('/dashboard')
           setStat(result.data.data)
            } catch (err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }
        fetchStats()
    },[])

   if(isLoading) return <div>Loading...</div>
   if(!stat) return <div>no data found</div>

   
   return (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <p className="text-3xl font-bold text-gray-900">{stat.total_tasks}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500">Completed</p>
        <p className="text-3xl font-bold text-emerald-500">{stat.completed_tasks}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500">Pending</p>
        <p className="text-3xl font-bold text-amber-500">{stat.pending_tasks}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-500">Completion Rate</p>
        <p className="text-3xl font-bold text-indigo-600">{stat.completion_rate}%</p>
      </div>

    </div>

    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <p className="text-sm text-gray-500">Current Streak</p>
      <p className="text-5xl font-bold text-emerald-500">{stat.streak} 🔥</p>
      <p className="text-sm text-gray-500 mt-1">days in a row</p>
    </div>

  </div>
)
}