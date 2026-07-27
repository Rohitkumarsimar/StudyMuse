export function TaskFilters({ activeFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "All" },
    { id: "completed", label: "Completed" },
    { id: "pending", label: "Pending" },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-col-3 grid-flow-col rounded-xl  border w-full border-gray-200 bg-gray-100 p-1 shadow-sm">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.id
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}