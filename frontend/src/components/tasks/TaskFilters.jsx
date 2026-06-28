export function TaskFilters({activeFilter, onFilterChange}){
    return (
  <div className="mb-6 flex gap-6 border-b border-gray-200">
    <button
      onClick={() => onFilterChange("all")}
      className={`pb-3 text-sm font-medium transition-colors ${
        activeFilter === "all"
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "text-gray-500 hover:text-indigo-600"
      }`}
    >
      All
    </button>

    <button
      onClick={() => onFilterChange("completed")}
      className={`pb-3 text-sm font-medium transition-colors ${
        activeFilter === "completed"
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "text-gray-500 hover:text-indigo-600"
      }`}
    >
      Completed
    </button>

    <button
      onClick={() => onFilterChange("pending")}
      className={`pb-3 text-sm font-medium transition-colors ${
        activeFilter === "pending"
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "text-gray-500 hover:text-indigo-600"
      }`}
    >
      Pending
    </button>
  </div>
);
}