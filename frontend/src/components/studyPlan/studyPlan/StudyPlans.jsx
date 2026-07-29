import { Spinner } from "#components/ui/spinner.jsx";
import { StudyPlanItems } from "./StudyPlanItems";
export function StudyPlans({ studyPlans, isLoading }) {
  return (
    <div className="p-7  border border-gray-200 bg-gray-50 rounded-2xl h-full w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200">
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
        <Spinner className={"size-10"} />
        </div>
      ) : (
        studyPlans.map((studyPlan) => (
          <StudyPlanItems
            key={studyPlan.id}
            studyPlan={studyPlan}
            isLoading={isLoading}
          />
        ))
      )}
    </div>
  );
}
