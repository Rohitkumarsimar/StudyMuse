import { Flame } from "lucide-react";

export function Streak({ stat }) {

  const today = new Date().getDay()
  let days = ['S','M','T','W','T','F','S']


  return (
    <div className="mx-2 rounded-2xl bg-linear-to-r from-indigo-600 via-indigo-500 to-violet-500 p-4 text-white shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-100">
        Current Streak
      </p>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold">{stat.streak} Days</h2>

          <p className="mt-2 text-indigo-100 leading-tight">
            Keep studying every day to maintain your streak.
          </p>
        </div>

        {/* <Flame className="h-20 w-20 text-amber-200" /> */}
        <h1 className="text-6xl">🔥</h1>
      </div >
      <div className="w-full flex gap-2">
        {
          days.map((day, index)=>(
            <div className={index === today?"p-2 w-9 text-center text-sm rounded-full  bg-gray-100 text-indigo-600 font-semibold":"p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold"}>
              {day}
            </div>
          ))
        }
      </div>
    </div>
  );
}



{/* <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          S
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          M
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          T
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          W
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          T
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          F
        </span>
        <span className="p-2 w-9 text-center text-sm rounded-full bg-indigo-200/20 text-white font-semibold">
          S
        </span> */}