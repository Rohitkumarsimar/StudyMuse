import { PenSquare, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "#assets/books-cup-pot.png"
export function HeroCard({userName}) {
    
    const navigate = useNavigate()
  return (
    <div className="m-3 bg-white rounded-lg py-4 px-5 flex flex-col gap-3 justify-center">
      <div className="flex w-full justify-between">
        <div className="w-[180%] ">

        <span className=" inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 border border-indigo-500/10">
          <span className="inline-block animate-pulse">✨</span> StudyMuse
        </span>

        <h1 className="mt-1 text-lg font-black tracking-tight text-gray-700 flex justify-between">
          Welcome Back {userName.split(" ")[0]}! 👋
        </h1>
        <div className=" mt-1">
          <p className=" text-xs  font-medium  text-gray-500 leading-tight">
            Track your study progress and stay consistent
            every single day.
          </p>
        </div>
        </div>
        <div className="w-full flex justify-center items-center">
            <img src={heroImg} className="h-20"/>
        </div>
      </div>

      <div className="grid grid-cols-2  text-xs  w-full gap-2">
        <button
          onClick={() => navigate("/chat")}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg cursor-pointer"
        >
          <PenSquare className="w-4 h-4" />
          Chat Muse AI
        </button>

        <button
          onClick={() => navigate("/studyplan")}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Create Study Plan
        </button>
      </div>
    </div>
  );
}
