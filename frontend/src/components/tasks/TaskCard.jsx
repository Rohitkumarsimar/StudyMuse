import { Button } from "@/components/ui/button";

export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-gray-900">
            {task.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">📚 {task.subject}</p>

          <p className="mt-1 text-sm text-gray-500">
            📅 Due: {new Date(task.due_date).toLocaleDateString("en-IN")}
          </p>
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        
        <Button
          variant="default"
          size="lg"
          onClick={() => onToggle(task.id, task.is_completed)}
        >
          {task.is_completed ? "Mark Pending" : "Mark Complete"}
        </Button>

        <Button variant="destructive" size="lg" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
