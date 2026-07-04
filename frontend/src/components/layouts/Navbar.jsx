import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { GraduationCap, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "#components/ui/sheet";

import NavLinks from "./NavLinks";

export default function Navbar({ compact = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navigate = useNavigate();
  const { logout } = useAuth();
  function handleLogout() {
    setIsMenuOpen(false);
    logout();
    navigate("/login");
  }
  return (
    <nav
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl p-2`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 h-12`}
      >
        <div className="flex items-center gap-3">
          <GraduationCap className={`h-7 w-7 text-indigo-600`} />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              StudyMuse
            </h1>

            <p className="hidden text-xs text-gray-500 md:block">
              Learn. Track. Improve.
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 rounded-2xl border border-gray-200 bg-gray-50 p-1 md:flex">
          <NavLinks />
        </div>

        {/* mobile navbar */}
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

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>

        <SheetContent side="right" className="w-72">
          <div className="mt-8 flex flex-col gap-2">
            <NavLinks onNavigate={() => setIsMenuOpen(false)} />

            <button
              onClick={handleLogout}
              className="mt-4 rounded-xl px-4 py-3 text-left text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
