import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";

export default function ProtectedRoutes({children}){
    const {token} = useAuth()
    if(!token){
        <Navigate to = '/login' />
    }else{
        return children
    }
}
