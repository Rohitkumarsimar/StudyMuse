import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function Home(){
  return <Navigate to = '/dashboard' replace />
}

function Login(){
  return <div>Login Page</div>
}

function Register(){
  return <div>Register Page</div>
}

function Dashboard(){
  return <div>Dashboard Page</div>
}

function Tasks(){
  return <div>Tasks Page</div>
}

function Profile(){
  return <div>Profile Page</div>
}

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/login" element = {<Login />}></Route>
      <Route path="/register" element = {<Register/>}></Route>
      <Route path="/dashboard" element = {<Dashboard />}></Route>
      <Route path="/tasks" element = {<Tasks />}></Route>
      <Route path="/profile" element = {<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

