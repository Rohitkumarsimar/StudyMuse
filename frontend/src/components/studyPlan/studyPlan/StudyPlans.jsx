import { StudyPlanItems } from "./StudyPlanItems";
import { useStudyPlan } from "#hooks/useStudyPlan.js";
import { StudyPlanSearch } from "./StudyPlanSearch";
export function StudyPlans() {
  const { studyPlans,searchQuery, setSearchQuery, loading } = useStudyPlan();

  console.log(searchQuery)

  return (
    <div className="p-8 border border-gray-200 bg-white rounded-2xl h-full w-full ">
        <StudyPlanSearch searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}/>
      {studyPlans.map((plans) => (
        <StudyPlanItems key={plans.id} studyPlan={plans}/>
      ))}
    </div>
  );
}
