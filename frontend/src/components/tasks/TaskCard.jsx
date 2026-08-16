import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Pencil, Plus } from "lucide-react";
import { Input } from "#components/ui/input.jsx";
import { useTasks } from "#hooks/useTasks.js";
import { Spinner } from "#components/ui/spinner.jsx";
export default function TaskCard({ task, onDelete, onToggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const {editTask, err} = useTasks();

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const [formData, setFormData] = useState({ title: "", description: "" });

  async function handleEdit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      // if (formData.title.length === 0 || formData.description.length === 0) {
      //   setError("Please Enter valid Data!");
      //   return;
      // }
      await editTask(task.id, task.studyPlan_id, formData);
    } catch (e) {
      console.log(e);
      console.log(err)
    } finally {
      setError(null);
    }
  }

  console.log(task.id);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-gray-900">
              {task.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">📚 {task.description}</p>
          </div>

          <span
            className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${
              task.is_completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.is_completed ? "Completed" : "Pending"}
          </span>
        </div>
        <button
          onClick={isOpen ? closeDialog : openDialog}
          className="cursor-pointer bg-indigo-200 flex items-center justify-center text-sm text-indigo-700 gap-2 px-2 py-1 border border-indigo-400 rounded-lg"
        >
          Edit
          <Pencil size={12} />
        </button>
      </div>

      {isOpen && (
        <div className="p-2 my-3  border  border-gray-300 rounded-lg bg-black/10">
          <div className="flex justify-between">
            <h1 className="text-black font-semibold ">Edit Task</h1>

            <Plus
              size={20}
              className="text-red-500 rotate-45"
              onClick={closeDialog}
            />
          </div>
          <form className="flex flex-col gap-3">
            <Input
              label="Title"
              type={"text"}
              className={
                "h-6 border-gray-700 rounded-sm text-sm text-black font-normal"
              }
              labelClassName={"text-sm text-black font-semibold"}

              value= {formData.title}
              onChange = {(e)=>setFormData({title: e.target.value})}
            />
            <Input
              label="Description"
              type={"text"}
              className={
                "h-6 border-gray-700 rounded-sm text-sm text-black font-normal"
              }
              labelClassName={"text-sm text-black font-semibold"}
              value= {formData.description}
              onChange = {(e)=>setFormData({description: e.target.value})}
            />
            {error ? <p className="text-sm text-red-500">{error}</p> : ""}
            <button
              className="px-2 py-1 bg-indigo-600 rounded-lg text-white font-semibold"
              onClick={handleEdit}
            >
              {isLoading && <Spinner className="mr-2 text-white" />}
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button
          variant="default"
          size="lg"
          onClick={() =>
            onToggle(task.id, task.studyPlan_id, task.is_completed)
          }
          className={"cursor-pointer"}
        >
          {task.is_completed ? "Mark Pending" : "Mark Complete"}
        </Button>

        <Button
          variant="destructive"
          size="lg"
          onClick={() => onDelete(task.id, task.studyPlan_id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
