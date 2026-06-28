import Button from "../ui/Button";

export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {task.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            📚 {task.subject}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            📅 Due:{" "}
            {new Date(task.due_date).toLocaleDateString("en-IN")}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            task.is_completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.is_completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button
          variant="primary"
          onClick={() => onToggle(task.id, task.is_completed)}
        >
          {task.is_completed
            ? "Mark Pending"
            : "Mark Complete"}
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
