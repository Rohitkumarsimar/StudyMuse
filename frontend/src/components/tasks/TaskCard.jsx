export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-900">{task.title}</p>
        <p className="text-sm text-gray-500">{task.subject}</p>
        <p className="text-sm text-gray-500">{task.due_date}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id, task.is_completed)}
          className="text-sm px-3 py-1 rounded-md bg-indigo-600 text-white"
        >
          {task.is_completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm px-3 py-1 rounded-md bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
