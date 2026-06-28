import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskFilters } from "../components/tasks/TaskFilters.jsx";
import TaskCard from "../components/tasks/TaskCard.jsx";
import { TaskForm } from "../components/tasks/TaskForm.jsx";
import Spinner from "../components/ui/Spinner.jsx";

export default function Tasks() {
  const [activeFilter, setActiveFilter] = useState("all");
  const {
    tasks,
    isLoading,
    fetchTasks,
    createTask,
    deleteTask,
    toggleComplete,
  } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.is_completed === true;
    if (activeFilter === "pending") return task.is_completed === false;
  });

 return (
  <div className="mx-auto flex h-[calc(100vh-80px)] max-w-7xl gap-8 px-6 py-8">
    {/* Left Section */}
    <div className="flex flex-1 flex-col overflow-hidden">
      <TaskFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="mt-6 flex-1 overflow-y-auto space-y-4 pr-2">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Spinner size="h-12 w-12" />
          </div>
        ) : tasks.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500">
            No tasks yet. Create your first task.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          ))
        )}
      </div>
    </div>

    {/* Right Section */}
    <aside className="sticky top-8 w-95 self-start">
      <TaskForm onSubmit={createTask} />
    </aside>
  </div>
);
}
