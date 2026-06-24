import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element = {<Home/>}></Route> */}
      <Route path="/login" element = {<Login />}></Route>
      <Route path="/register" element = {<Register/>}></Route>
      {/* <Route path="/dashboard" element = {<Dashboard />}></Route> */}
      {/* <Route path="/tasks" element = {<Tasks />}></Route> */}
      {/* <Route path="/profile" element = {<Profile />}></Route> */}
    </Routes>
    </BrowserRouter>
  )
}

