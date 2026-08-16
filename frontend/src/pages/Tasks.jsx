import { useState, useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskFilters } from "../components/tasks/TaskFilters.jsx";
import TaskCard from "../components/tasks/TaskCard.jsx";
import { TaskForm } from "../components/tasks/TaskForm.jsx";
import { Spinner } from "../components/ui/spinner.jsx";
import { useParams } from "react-router-dom";
import { CompanionMessage } from "#components/tasks/CompanionMessage.jsx";
import TodoIcon from "../components/tasks/TodoIcon.svg"

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

  const { studyPlan_id } = useParams();
  useEffect(() => {
    if (studyPlan_id) {
      fetchTasks(studyPlan_id);
    }
  }, []);
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.is_completed === true;
    if (activeFilter === "pending") return task.is_completed === false;
  });

  return (
    <div className="lg:mx-auto max-w-full lg:flex-row px-6 py-8 lg:flex lg:h-[calc(100vh-80px)] lg:gap-8 ">
      <aside className=" w-full space-y-2 lg:space-y-0 sticky lg:top-8 lg:flex lg:flex-col lg:gap-5 lg:w-96 lg:self-start">
        <div className=" lg:hidden">
          <CompanionMessage />
          </div>
        <TaskForm onSubmit={createTask} />
        <div className="hidden lg:block">
          <CompanionMessage />
          </div>
      </aside>

      <div className="flex flex-1  flex-col mt-3">
        <div className="sticky top-0 z-10   bg-none backdrop-blur-lg p-1">
          <TaskFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="mt-4 space-y-4 lg:mt-6 lg:flex-1 lg:overflow-y-auto scrollbar-none lg:pr-2">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner size="h-12 w-12" />
            </div>
          ) : tasks.length === 0 ? (
            <div className="rounded-2xl border-dashed border h-75 lg:h-full border-gray-300 bg-gray-50 p-10 flex flex-col items-center ">
              <img src={TodoIcon} className="lg:h-[70%]"/>
              <h1 className="text-lg font-bold text-gray-900">No Tasks</h1>
              <p className="text-sm text-center text-gray-700">Looks like you haven't added any tasks to this study plan.</p>
              <p className="hidden lg:block text-sm text-center text-gray-700">Create your first task and start making progress! 🚀</p>
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
