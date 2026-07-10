import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes.jsx";
import Navbar from "./components/layouts/Navbar.jsx";

import AuthPage from "./pages/AuthPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Profile from "./pages/Profile.jsx";
import Chat from "#pages/Chat.jsx";
import ForgotPassword from "#pages/ForgotPassword.jsx";
import ResetPassword from "#pages/ResetPassword.jsx";
import { useLocation } from "react-router-dom";
import VerifyEmail from "#pages/VerifyEmail.jsx";

function ProtectedLayout() {
  const location = useLocation();

  const isChatPage = location.pathname === "/chat";
  return (
    <ProtectedRoutes>
      <div
        className={isChatPage ? "h-dvh" : "h-screen bg-gray-100 flex flex-col"}
      >
        <header className="sticky top-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur-xl">
          <div className={isChatPage ? "hidden lg:block" : ""}>
            <Navbar />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </ProtectedRoutes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/auth-page" element={<AuthPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />}></Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/chat/:conv_id?" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
