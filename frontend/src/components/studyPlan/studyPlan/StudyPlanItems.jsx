import { BookOpen, CalendarDays, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "#components/ui/spinner.jsx";

export function StudyPlanItems({ studyPlan }) {
  const navigate = useNavigate();

  const createdAt = new Date(studyPlan.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const updatedAt = new Date(studyPlan.updated_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  function handleTaskNav() {
    try {
      navigate(`/tasks/${studyPlan.id}/`, {
        state: { studyPlan_id: studyPlan.id },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="group mb-3 w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-violet-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        {/* Left */}
        <div className="w-full flex flex-1 items-start gap-3">
          <div className="hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-100">
            <BookOpen className="h-6 w-6 text-violet-600" />
          </div>

          <div className="w-full flex-1 lg:min-w-0">
            {/* Top Row */}
            <div className="flex w-full items-center justify-between">
              <span className="inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700">
                {studyPlan.studyPlan_type}
              </span>

              <button className="lg:hidden rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
                <MoreVertical size={14} />
              </button>
            </div>

            {/* Title */}
            <h2 className="mt-2 hidden truncate text-lg font-semibold text-gray-900 lg:block">
              {studyPlan.title}
            </h2>

            <h2 className="mt-2 truncate text-base font-semibold text-gray-900 lg:hidden">
              {studyPlan.title}
            </h2>

            {/* Description */}
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {studyPlan.description || "No description provided."}
            </p>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex flex-col items-end gap-3">
          <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
            <MoreVertical size={18} />
          </button>

          <button
            className="rounded-lg bg-indigo-600 text-sm text-white cursor-pointer hover:bg-indigo-700 lg:px-3 lg:py-2 lg:text-md"
            onClick={handleTaskNav}
          >
            View Tasks
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between border-t pt-3 text-xs text-gray-500 lg:gap-3">
        <div className="flex items-center gap-2">
          <CalendarDays size={15} />
          <span>
            <span className="font-medium text-gray-700">Created:</span>{" "}
            {createdAt}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={15} />
          <span>
            <span className="font-medium text-gray-700">Updated:</span>{" "}
            {updatedAt}
          </span>
        </div>

        {/* Mobile Action */}
        <button
          className="lg:hidden rounded-lg text-sm text-indigo-700 active:text-indigo-800"
          onClick={handleTaskNav}
        >
          View Tasks
        </button>
      </div>
    </div>
  );
}