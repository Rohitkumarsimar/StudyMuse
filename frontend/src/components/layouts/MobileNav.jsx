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
    <div className="fixed bottom-0 left-0 right-0 w-full h-18 rounded-t-xl bg-white  flex justify-evenly  items-center">
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/')}>
        <Home  size={30} />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/studyplan')}>
        <BookOpenCheck  size={30} />
         <p className="text-sm">Study Plans</p>
      </div>
      <div className=" p-6 rounded-full bg-violet-600 text-white " onClick={()=>navigate('/chat')}>
        <Sparkles className="fill-white" />
      </div>

      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/studyplan')}>
        <CalendarCheck  size={30} />
         <p className="text-sm">Tasks</p>
      </div>
      <div className="flex flex-col text-gray-800 active:text-indigo-600 items-center" onClick={()=>navigate('/profile')}>
        <CircleUserRound  size={30} />
         <p className="text-sm">Profile</p>
      </div>
    </div>
  );
}
