import {
  Flame,
  CircleCheckBig,
  CalendarCheck,
  ClockFading,
  Percent,
  Plus,
  PenSquare
} from "lucide-react";

export default function Stat({stat}){
    const completionRate = stat.totalTasks === 0?0: Math.floor((stat.completedTasks/stat.totalTasks)*100)

   return (
  <div className="mx-2 flex gap-2 overflow-x-auto scrollbar-none">
    {/* total studyplans */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 w-35 h-40 shrink-0">
      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
        <CalendarCheck size={20} className="text-white" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-xs font-medium text-gray-500">Total Plans</p>

        <p className="text-2xl font-bold text-gray-900">
          {stat.totalStudyPlans}
        </p>
      </div>
    </div>

    {/* total tasks */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 w-35 h-40 shrink-0">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
        <CalendarCheck size={20} className="text-white" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-xs font-medium text-gray-500">Total Tasks</p>

        <p className="text-2xl font-bold text-gray-900">
          {stat.totalTasks}
        </p>
      </div>
    </div>

    {/* completed */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 w-35 h-40 shrink-0">
      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
        <CircleCheckBig size={20} className="text-white" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-xs font-medium text-gray-500">Completed</p>

        <p className="text-2xl font-bold text-emerald-500">
          {stat.completedTasks}
        </p>
      </div>
    </div>

    {/* pending */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 w-35 h-40 shrink-0">
      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
        <CircleCheckBig size={20} className="text-white" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-xs font-medium text-gray-500">Pending</p>

        <p className="text-2xl font-bold text-red-500">
          {stat.pendingTasks}
        </p>
      </div>
    </div>

    {/* completion rate */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 w-35 h-40 shrink-0">
      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
        <Percent size={20} className="text-white" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-xs font-medium text-gray-500">
          Completion Rate
        </p>

        <p className="text-2xl font-bold text-indigo-600">
          {completionRate}
        </p>
      </div>
    </div>
  </div>
);
}