import { StudyPlanCard } from "#components/studyPlan/createStudyPlanCard/PlanTypeToggle.jsx";
import { StudyPlans } from "#components/studyPlan/studyPlan/StudyPlans.jsx";
import { StudyPlanSearch } from "#components/studyPlan/studyPlan/StudyPlanSearch.jsx";
import { useStudyPlan } from "#hooks/useStudyPlan.js";
import { PencilSparkles } from "lucide-react";
import muse_ai from "../assets/muse-ai.png";
export function StudyPlan() {
  const { searchQuery, setSearchQuery } = useStudyPlan();
  return (
    <div className="relative flex h-full overflow-y-hidden p-3 gap-3">
      <StudyPlanCard />
      <div className="w-full flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3">
        <StudyPlanSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <StudyPlans />
        <div className="w-full flex gap-3 items-center p-2 border border-gray-300  bg-white rounded-lg">
          <img src={muse_ai} className="h-40 rounded-b-full -scale-x-100  " />
          <div>
            <PencilSparkles className="text-gray-700 h-10 w-10" />
          </div>
          <p className="font-semibold text-sm text-gray-500 italic">
            Based on your recent progress, focus on Data Structures today.
            Complete one stack problem, review time complexity, and spend 20
            minutes revising yesterday's notes before starting a new topic.
            Consistency beats intensity.
          </p>
        </div>
      </div>
    </div>
  );
}
