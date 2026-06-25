import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskFilters } from "../components/tasks/TaskFilters.jsx";
import TaskCard from "../components/tasks/TaskCard.jsx";
import { TaskForm } from "../components/tasks/TaskForm.jsx";

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
    <div>
    <TaskForm onSubmit={createTask} />
    <TaskFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
    
    {isLoading 
      ? <div>Loading...</div>
      : tasks.length === 0
        ? <div>No tasks yet. Create your first task above.</div>
        : filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          ))
    }
  </div>
  );
}
