import { Search } from "lucide-react";
import { Input } from "#components/ui/input.jsx";

export function StudyPlanSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className=" flex justify-center">
      <div className="relative w-full max-w-lg">
        <Search
          size={18}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
        />

        <Input
          type="text"
          placeholder="Search study plans..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-4 text-sm shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100"
        />
      </div>
    </div>
  );
}