import { useState, useEffect } from "react";
import { api } from "../api/axios.js";
import { useNavigate } from "react-router-dom";

import {
  Flame,
  CircleCheckBig,
  CalendarCheck,
  ClockFading,
  Percent,
  Plus,
} from "lucide-react";

export default function Dashboard() {
  const [stat, setStat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStats() {
      try {
        const result = await api.get("/dashboard");
        setStat(result.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="animate-pulse">
      
        <div className="mb-10 rounded-3xl border border-gray-200 bg-white p-8">
          <div className="h-4 w-28 rounded bg-gray-200"></div>

          <div className="mt-4 h-10 w-72 rounded bg-gray-300"></div>

          <div className="mt-3 h-4 w-96 rounded bg-gray-200"></div>
        </div>

        <div className="mb-8 rounded-2xl bg-gray-200 p-8">
          <div className="h-4 w-32 rounded bg-gray-300"></div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="h-12 w-40 rounded bg-gray-300"></div>
              <div className="mt-3 h-4 w-64 rounded bg-gray-300"></div>
            </div>

            <div className="h-20 w-20 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="mb-4 h-8 w-40 rounded bg-gray-300"></div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div className="h-4 w-24 rounded bg-gray-200"></div>

              <div className="mt-6 flex items-end justify-between">
                <div className="h-10 w-16 rounded bg-gray-300"></div>

                <div className="h-10 w-10 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (!stat) return <div>no data found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-1">
      <header className="relative mb-10 overflow-hidden rounded-3xl border border-gray-200/60 bg-white/70 p-8 shadow-xl shadow-gray-100/50 backdrop-blur-md">
        <div className="absolute -right-10 -top-20 -z-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 -z-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 border border-indigo-500/10">
              <span className="inline-block animate-pulse">✨</span> StudyMuse
            </span>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-700 sm:text-4xl">
              Welcome Back <span className="inline-block ">👋</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-gray-500">
              Track your study progress and stay consistent{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent">
                every single day.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => navigate("/tasks")}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Task
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

            <Flame className="h-20 w-20 text-white" />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-extrabold uppercase tracking-widest text-gray-700 mb-4">
          Overview
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* total tasks */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Total Tasks</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-gray-900">
                  {stat.total_tasks}
                </p>

                <CalendarCheck className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>

          {/* completed tasks */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Completed</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-emerald-500">
                  {stat.completed_tasks}
                </p>

                <CircleCheckBig className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>
          {/* pending tasks */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-500">Pending</p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-amber-500">
                  {stat.pending_tasks}
                </p>

                <ClockFading className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>

          {/* completion rate */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-gray-700">
                Completion Rate
              </p>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-bold text-indigo-600">
                  {stat.completion_rate}
                </p>

                <Percent className="w-9 h-9  text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
