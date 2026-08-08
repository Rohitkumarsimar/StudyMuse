import {
  Sparkles,
  Home,
  BookOpenCheck,
  CircleUserRound,
  CalendarCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
    const navigate = useNavigate()
  return (
    <div className=" fixed bottom-0 left-0 right-0 w-full h-19 rounded-t-xl bg-white  flex justify-around  items-center">
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/')}>
        <Home  size={27} />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/studyplan')}>
        <BookOpenCheck  size={27} />
         <p className="text-sm">Plans</p>
      </div>
      
      <div className="-translate-y-3 p-6 rounded-full shadow-xl shadow-gray-700/50 bg-linear-to-b from-white via-violet-600 to-indigo-600 text-white flex flex-col items-center " onClick={()=>navigate('/chat')}>
        <Sparkles className="fill-white" size={20}/>
      </div>

      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/studyplan')}>
        <CalendarCheck  size={27} />
         <p className="text-sm">Tasks</p>
      </div>
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/profile')}>
        <CircleUserRound  size={27} />
         <p className="text-sm">Profile</p>
      </div>
    </div>
  );
}
