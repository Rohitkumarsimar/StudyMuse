import { StudyPlanCard } from "#components/studyPlan/createStudyPlanCard/PlanTypeToggle.jsx";
import { StudyPlans } from "#components/studyPlan/studyPlan/StudyPlans.jsx";
import { StudyPlanSearch } from "#components/studyPlan/studyPlan/StudyPlanSearch.jsx";
import { useStudyPlan } from "#hooks/useStudyPlan.js";

export function StudyPlan() {
  const {
    studyPlans,
    searchQuery,
    setSearchQuery,
    createStudyPlan,
    updateStudyPlan,
    deleteStudyPlan,
  } = useStudyPlan();

  return (
    <div className="relative flex h-full flex-col gap-3 p-3 lg:flex-row lg:overflow-y-hidden">
      <StudyPlanCard
        createStudyPlan={createStudyPlan}
      />

      <div className="flex w-full flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3">
        <StudyPlanSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <StudyPlans
          studyPlans={studyPlans}
          updateStudyPlan={updateStudyPlan}
          deleteStudyPlan={deleteStudyPlan}
        />
      </div>
    </div>
  );
}