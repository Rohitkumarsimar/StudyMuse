import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes.jsx";
import Navbar from "./components/layouts/Navbar.jsx";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Profile from "./pages/Profile.jsx";

function ProtectedLayout() {
  return (
    <ProtectedRoutes>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </ProtectedRoutes>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
