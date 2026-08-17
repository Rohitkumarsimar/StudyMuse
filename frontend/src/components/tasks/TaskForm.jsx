import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button.jsx";
import { useLocation } from "react-router-dom";
import { Pencil } from "lucide-react";

// const {studyPlan_id, title, description, is_completed}= req.body
export function TaskForm({ onSubmit }) {
  const location = useLocation();
    const studyPlan_id= location?.state.studyPlan_id;
    const studyPlan_name= location?.state.studyPlan_title;


  const [formData, setFormData] = useState({
    studyPlan_id: studyPlan_id,
    title: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(formData);
    setFormData({ title: "", description: "" });
    setIsLoading(false);
  }

  return (
    <div className="w-full  rounded-2xl border border-gray-200 bg-white   p-4 shadow-sm lg:shadow-2xl sm:p-5 lg:p-6">
      <h2 className="text-lg font-bold text-gray-700 sm:text-xl mb-1  ">
        StudyPlan: {studyPlan_name}
      </h2>
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-indigo-600"></div>
      <div className="mb-3 mt-2">
        <h2 className="text-md font-bold text-gray-900 sm:text-xl">
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
          labelClassName={"text-gray-700 font-semibold"}
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          className={"bg-white"}
        />

        <Input
          type="text"
          label="Description"
          labelClassName={"text-gray-700 font-semibold"}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className={"bg-white"}
        />

        <div className="pt-1">
          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
            className={"w-full mt-2"}
          >
            Create Task
          </Button>
        </div>
      </form>
      <div className="hidden lg:flex mt-5 gap-3 border shadow-sm border-gray-100  rounded-lg  text-gray-900  p-4">
        <div className="p-5 flex items-center rounded-full border border-gray-100 bg-gray-100 hover:scale-105 duration-300 transition-al">
          <Pencil className="h-9 w-9 text-gray-700" />
        </div>
        <div>
          <p className="font-medium text-sm cursor-default">
            Focus on one step right now. Action creates momentum, so ignore the
            big picture and just conquer this single task.
          </p>
        </div>
      </div>
    </div>
  );
}
