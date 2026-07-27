import { StudyPlanCard } from "#components/studyPlan/createStudyPlanCard/PlanTypeToggle.jsx";
import { StudyPlans } from "#components/studyPlan/studyPlan/StudyPlans.jsx";

export function StudyPlan(){
    return(
        <div className="relative flex h-full overflow-y-hidden p-3 gap-3">
            <StudyPlanCard/>
            <StudyPlans/>
        </div>
    )
}