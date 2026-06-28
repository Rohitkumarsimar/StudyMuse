import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { GraduationCap, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  function closeMenu(){
    setIsMenuOpen(false)
  }

  const navigate = useNavigate();
  const { logout } = useAuth();
  function handleLogout() {
    setIsMenuOpen(false);
    logout();
    navigate("/login");
  }
  return (
    <nav className="top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl p-3 relative">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-9 w-9 text-indigo-600" />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              StudyMuse
            </h1>

            <p className="text-xs text-gray-500">Learn. Track. Improve.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 rounded-2xl border border-gray-200 bg-gray-50 p-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-gray-900"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-gray-900"
              }`
            }
          >
            Tasks
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-gray-900"
              }`
            }
          >
            Profile
          </NavLink>
        </div>

        <button
          onClick={handleLogout}
          className="hidden md:flex items-center justify-center rounded-xl p-2 text-gray-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-5 w-5" />
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-gray-200 bg-white shadow-xl md:hidden">
          <div className="flex flex-col p-4">
            <NavLink
              to="/dashboard"
              className="rounded-xl px-4 py-3 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/tasks"
              className="rounded-xl px-4 py-3 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Tasks
            </NavLink>

            <NavLink
              to="/profile"
              className="rounded-xl px-4 py-3 hover:bg-gray-100"
              onClick={isMenuOpen}
            >
              Profile
            </NavLink>

            <button
              onClick={handleLogout}
              className="mt-3 rounded-xl px-4 py-3 text-left text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
