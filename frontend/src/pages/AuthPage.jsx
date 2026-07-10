import Hero from "#components/auth/Hero.jsx";
import Login from "#components/auth/Login.jsx";
import { useState } from "react";

export default function AuthPage() {
  const [isReg, setIsReg] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b lg:bg-linear-to-r from-indigo-950 via-indigo-700 to-violet-600 lg:to-purple-600 flex items-center justify-between">
      <Hero />
      <Login isReg={isReg} setIsReg={setIsReg} />
    </div>
  );
}
