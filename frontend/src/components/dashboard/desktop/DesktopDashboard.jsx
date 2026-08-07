
import {
  Flame,
  CircleCheckBig,
  CalendarCheck,
  ClockFading,
  Percent,
  Plus,
  PenSquare
} from "lucide-react";
import Footer from "#components/layouts/Footer.jsx";

export default function DesktopDashboard({stat}) {
  const completionRate = stat.totalTasks === 0?0: Math.floor((stat.completedTasks/stat.totalTasks)*100)

  return (
    <div className=" w-full">
    <div className="max-w-7xl mx-auto px-6 py-1 mt-5">
      <header className="relative mb-10 overflow-hidden rounded-3xl  bg-white p-8 shadow-xl shadow-gray-100/30 backdrop-blur-md">
        <div className="absolute -right-10 -top-20 -z-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 -z-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div >
            <span className=" inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 border border-indigo-500/10">
              <span className="inline-block animate-pulse">✨</span> StudyMuse
            </span>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-700 sm:text-4xl flex justify-between lg:justify-normal">
              Welcome Back <span className="inline-block ">👋</span>
            </h1>
              <div className=" mt-1 flex max-w-xl gap-1 items-center ">

            <p className=" text-sm font-medium leading-relaxed text-gray-500">
              Track your study progress and stay consistent
            </p>
              <p className="hidden lg:block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent">
                every single day.
              </p>
              </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <button
              onClick={() => navigate("/chat")}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg cursor-pointer"
            >
              <PenSquare className="w-5 h-5" />
              Chat Muse AI
            </button>

            <button
              onClick={() => navigate("/studyplan")}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              Create Study Plan
            </button>
          </div>
        </div>
      </header>

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

      <section className="lg:mt-15">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase tracking-widest text-gray-100 text-center mb-1">
          Overview
        </h1>
    <div className="w-full h-1 bg-linear-to-r from-transparent via-white mb-5"></div>
        <div className="grid grid-cols-2 gap-4">

        {/* total studyplans */}
          <div className="bg-white  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Total Study Plans</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-gray-900">
                  {stat.totalStudyPlans}
                </p>

                <CalendarCheck className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>

          {/* total tasks */}
          <div className="bg-white  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Total Tasks</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-gray-900">
                  {stat.totalTasks}
                </p>

                <CalendarCheck className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>

          {/* completed tasks */}
          <div className="bg-white  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Completed</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-emerald-500">
                  {stat.completedTasks}
                </p>

                <CircleCheckBig className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>
          {/* pending tasks */}
          <div className="bg-white  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Pending</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-amber-500">
                  {stat.pendingTasks}
                </p>

                <ClockFading className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>

          {/* completion rate */}
          <div className="bg-white  border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-700">
                Completion Rate
              </p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-indigo-600">
                  {completionRate}
                </p>

                <Percent className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    <Footer/>
    </div>
  );
}
