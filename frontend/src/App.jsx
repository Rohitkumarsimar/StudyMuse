import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes.jsx";
import Navbar from "./components/layouts/Navbar.jsx";
import MobileNav from "#components/layouts/MobileNav.jsx";
import Header from "#components/layouts/Header.jsx";

import AuthPage from "./pages/AuthPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Profile from "./pages/Profile.jsx";
import Chat from "#pages/Chat.jsx";
import ForgotPassword from "#pages/ForgotPassword.jsx";
import ResetPassword from "#pages/ResetPassword.jsx";
import { useLocation } from "react-router-dom";
import VerifyEmail from "#pages/VerifyEmail.jsx";
import { StudyPlan } from "#pages/StudyPlan.jsx";
import useMediaQuery from "#hooks/useMediaQuery.js";

function ProtectedLayout() {
  const location = useLocation();
  const isChatPage = location.pathname.includes("/chat") ;
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  console.log(
  location.pathname.includes("/chat")
);
  console.log({
  pathname: location.pathname,
  isChatPage,
  isDesktop,
});
  return (
    <ProtectedRoutes>
      <div
        className={isChatPage  ? "h-dvh" : "h-screen  bg-linear-to-t bg-indigo-950 via-violet-700 to-indigo-700  flex flex-col"}
      >
        <header className={isChatPage && !isDesktop ? "hidden" : "sticky top-0 z-50"}>
          
            {isDesktop?<Navbar/>:<Header/>}
            
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
        {isDesktop?"":<MobileNav/>}
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
          <Route path="/tasks/:studyPlan_id" element={<Tasks />} />
          <Route path="/studyplan" element={<StudyPlan />} />
          <Route path="/chat/:conv_id?" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
