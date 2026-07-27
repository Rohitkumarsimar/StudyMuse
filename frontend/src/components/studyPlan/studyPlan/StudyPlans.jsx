import { StudyPlanItems } from "./StudyPlanItems";
import { useStudyPlan } from "#hooks/useStudyPlan.js";
export function StudyPlans() {
  const { studyPlans } = useStudyPlan();

  return (
    <div className="p-7  border border-gray-200 bg-gray-50 rounded-2xl h-full w-full overflow-y-scroll ">
      {studyPlans.map((plans) => (
        <StudyPlanItems key={plans.id} studyPlan={plans} />
      ))}
    </div>
  );
}
