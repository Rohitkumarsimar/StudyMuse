import { useState } from "react";
import {Input} from "../ui/input";
import { Button } from "@/components/ui/button.jsx";

export function TaskForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    due_date: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      ...formData,
      due_date: formData.due_date
        ? new Date(formData.due_date).toISOString()
        : null,
    };

    await onSubmit(payload);
    setFormData({ title: "", subject: "", due_date: "" });
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
          label="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({
              ...formData,
              subject: e.target.value,
            })
          }
        />

        <Input
          type="date"
          label="Due Date"
          value={formData.due_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              due_date: e.target.value,
            })
          }
        />

        <div className="pt-1">
          <Button type="submit" size="lg" isLoading={isLoading}>
            Create Task
          </Button>
        </div>
      </form>
    </div>
  );
}
