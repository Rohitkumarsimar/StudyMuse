import { Menu,  BellDot, GraduationCap } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();

  const isChatPage = location.pathname === "/chat";
  return (
    <div className={isChatPage?"hidden":"flex justify-between items-center p-2 text-white"}>
      <div className="flex justify-between w-[60%] items-center mx-2 mt-2">

      {/* <div>
        <Menu size={35} className=" " />
      </div> */}
      <div className="flex  gap-2 items-center">
        <GraduationCap size={38} />
        <div className="flex flex-col gap-0 ">
          <h1 className="text-md font-semibold">StudyMuse</h1>
          <p className="text-xs ">Learn. Track. Improve</p>
        </div>

      </div>

      </div>
      <div className="grid grid-row-2 place-items-center">
      <BellDot size={25}/>
      <p className="text-xs text-white">coming soon...</p>
      </div>
    </div>
  );
}
