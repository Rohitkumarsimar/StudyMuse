import { useState } from "react";
import {Input} from "../ui/input";
import { Button } from "@/components/ui/button.jsx";
import { useLocation } from "react-router-dom";
import { Pencil } from "lucide-react";

// const {studyPlan_id, title, description, is_completed}= req.body
export function TaskForm({ onSubmit }) {
const location = useLocation()
const studyPlan_id = location?.state.studyPlan_id

  const [formData, setFormData] = useState({
    studyPlan_id: studyPlan_id,
    title: "",
    description: "",
  });

  console.log(formData)
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(formData);
    setFormData({ title: "", description: "" });
    setIsLoading(false);
  }

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
          Create Task
        </h2>

        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Add a new study task.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <Input
          type="text"
          label="Task Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />


        <Input
          type="text"
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <div className="pt-1">
          <Button type="submit" size="lg" isLoading={isLoading} className={"w-full mt-2"}>
            Create Task
          </Button>
        </div>
      </form>
      <div className="flex mt-5">
         <div className="p-5 rounded-full bg-gray-200"> <Pencil className="h-10 w-10 text-gray-800"/>
         </div>
          <p className="font-medium text-sm text-gray-700">
            Focus on one step right now. Action creates momentum, so ignore the big picture and just conquer this single task.
          </p>
      </div>
    </div>
  );
}
