import { useState } from "react";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios.js";
import { useAuth } from "../hooks/useAuth.js";


export default function Login() {
    const navigate = useNavigate();
    const {login} = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/login", formData);
      if (result) {
        login(result.data.data.token, result.data.data.user);
        navigate("/dashboard");
      }
    } catch (err) {
        setError(err.response.data.message)
    } finally {
      setIsLoading(false);
    }
  }
  return <form onSubmit={handleSubmit}>
    <Input
    type="email"
    label = "Enter Email"
    value = {formData.email}
    onChange = {(e)=> setFormData({...formData, email: e.target.value}) }/>

    <Input
    type = "password"
    label = "Enter Password"
    value = {formData.password}
    onChange = {(e)=>setFormData({...formData, password: e.target.value})}
    error = {error}
    />

    <Button variant={'primary'} isLoading={isLoading}>
        Login
    </Button>
  </form>;
}
