import { PencilSparkles } from "lucide-react";
import muse_ai from "../../assets/muse-ai.png";

export function CompanionMessage(){
    return (
        <div className="h-30 w-full flex gap-3 items-center p-2 border border-gray-200 shadow-sm lg:shadow-xl bg-white rounded-lg" >
         
          <img src={muse_ai} className="h-15 lg:h-20 filter drop-shadow-[0_6px_2px_rgba(0,0,0,0.5)] -scale-x-100  " />
         
          <p className="h-full p-2 border rounded-lg border-gray-200 overflow-scroll scrollbar-none text-sm text-gray-500 italic">
            Based on your recent progress, focus on Data Structures today.
            Complete one stack problem, review time complexity, and spend 20
            minutes revising yesterday's notes before starting a new topic.
            Consistency beats intensity.
          </p>
        </div>
    )
}