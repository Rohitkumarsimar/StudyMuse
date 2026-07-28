import { StudyPlanItems } from "./StudyPlanItems";
export function StudyPlans({studyPlans}) {

  return (
    <div className="p-7  border border-gray-200 bg-gray-50 rounded-2xl h-full w-full overflow-y-scroll ">
      {studyPlans.map((studyPlan) => (
        <StudyPlanItems
          key={studyPlan.id}
          studyPlan={studyPlan}
        />
      ))}
    </div>
  );
}
