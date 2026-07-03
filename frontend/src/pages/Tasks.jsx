import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskFilters } from "../components/tasks/TaskFilters.jsx";
import TaskCard from "../components/tasks/TaskCard.jsx";
import { TaskForm } from "../components/tasks/TaskForm.jsx";
import {Spinner} from "../components/ui/spinner.jsx";

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
  <div className="mx-auto max-w-full px-6 py-8 lg:flex lg:h-[calc(100vh-80px)] lg:gap-8">
   
    <aside className="mb-6 w-full sticky lg:top-8 lg:mb-0 lg:w-96 lg:self-start">
      <TaskForm onSubmit={createTask} />
    </aside>

    
    <div className="flex flex-1 flex-col">
   
      <div className="sticky top-0 z-10  bg-gray-100 backdrop-blur-lg p-1">
        <TaskFilters 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <div className="mt-4 space-y-4 lg:mt-6 lg:flex-1 lg:overflow-y-auto lg:pr-2">
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
  </div>
);
}
