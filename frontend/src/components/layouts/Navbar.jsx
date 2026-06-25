import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  function handleLogout() {
    logout();
    Navigate("/login");
  }
  return (
    <nav className="bg-emerald-400 p-5 grid grid-cols-3">
      <span>StudyMuse</span>
      <span>
        <NavLink to="/tasks" className="text-sm text-gray-900  font-semibold px-3">Tasks</NavLink>
        <NavLink to="/dashboard" className="text-sm text-gray-900  font-semibold px-3">Dashboard</NavLink>
        <NavLink to="/profile" className="text-sm text-gray-900  font-semibold px-3">Profile</NavLink>
      </span>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
