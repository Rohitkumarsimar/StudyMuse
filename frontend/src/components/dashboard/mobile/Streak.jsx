import { Flame } from "lucide-react";

export function Streak({stat}){
    return(
        <div className="m-2">
            <section className="mb-8">
        <div className="rounded-2xl bg-linear-to-r from-indigo-400 via-indigo-500 to-violet-500 p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-100">
            Current Streak
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold">{stat.streak} Days</h2>

              <p className="mt-2 text-indigo-100">
                Keep studying every day to maintain your streak.
              </p>
            </div>

            <Flame className="h-20 w-20 text-amber-200" />
          </div>
        </div>
      </section>
        </div>
    )
}