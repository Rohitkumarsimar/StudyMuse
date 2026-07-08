import { api } from "#api/axios.js";
import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom"
import FormInput from "#components/login-signup/FormInput.jsx";
import { Spinner } from "#components/ui/spinner.jsx";
import { Button } from "#components/ui/button.jsx";

export default function ResetPassword(){
    const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const navigate = useNavigate()
const {state} = useLocation()
const email = state?.email
useEffect(() => {
    if (!email) {
        navigate("/forgot-password");
    }
}, [email, navigate]);

async function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    if (!email) {
        navigate("/forgot-password");
        return
    }
    if(password !== confirmPassword){
        setError("Passwords do not match!")
        setPassword("")
        setConfirmPassword("")
        setIsLoading(false)
        return
    }
    try{
        const result = await api.post('/auth/password-reset', {email, password})
        if(result){
            navigate('/login')
            return result.data.data
        }
    }catch(err){
        setError(err.response.data.message)
    }finally{
        setIsLoading(false)
        setPassword("")
        setConfirmPassword("")
    }
}

return(
   <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Reset Password
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your new password.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <FormInput
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormInput
                type="password"
                label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={error}
              />

              <Button variant="default" size="lg" disabled={isLoading}>
                {isLoading && <Spinner className="mr-2 text-white" />}
                {isLoading ? "Changing password" : "Change Password"}
              </Button>
            </form>
          </div>  
          </div>
)

}