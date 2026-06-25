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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Enter title:"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      ></Input>
      <Input
        type="text"
        label="Enter subject:"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      ></Input>
      <Input
        type="date"
        label="Enter due date:"
        value={formData.due_date}
        onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
      ></Input>

      <Button variant={"primary"} isLoading={isLoading}>
        Create Task
      </Button>
    </form>
  );
}
