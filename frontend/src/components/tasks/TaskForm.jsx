import { useState } from "react";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";

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
  <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
    <div className="mb-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Create New Task
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Stay organized by adding your next study task.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
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

      <div className="pt-2">
        <Button variant="primary" isLoading={isLoading}>
          Create Task
        </Button>
      </div>
    </form>
  </div>
);
}
