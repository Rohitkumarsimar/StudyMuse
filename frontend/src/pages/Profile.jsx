import { useState, useEffect } from "react";
import { api } from "../api/axios";

export default function Profile(){
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchProfile(){
            try{
                const result = await api.get('/auth/profile')
                setProfile(result.data.data)
            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }
        fetchProfile()
    },[])

    if(isLoading) return <div>Loading...</div>
    if(!profile) return <div>Profile not found!</div>

    return(
        <div className="flex p-3 border border-gray-300 rounded-lg">
            <p className="text-sm text-gray-900 m-1">Username: {profile.name}</p>
            <p className="text-sm text-gray-900 m-1">email: {profile.email}</p>
        </div>
    )
}