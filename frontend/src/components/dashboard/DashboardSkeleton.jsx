export function DashboardSkeleton(){
     return (
      <div className="animate-pulse max-w-7xl mx-auto px-6 py-1">
      
        <div className="mb-10 rounded-3xl border border-gray-200 bg-white p-8">
          <div className="h-4 w-28 rounded bg-gray-200"></div>

          <div className="mt-4 h-10 w-72 rounded bg-gray-300"></div>

          <div className="mt-3 h-4 w-[90%] rounded bg-gray-200"></div>
        </div>

        <div className="mb-8 rounded-2xl bg-gray-200 p-8">
          <div className="h-4 w-32 rounded bg-gray-300"></div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="h-12 w-40 rounded bg-gray-300"></div>
              <div className="mt-3 h-4 w-64 rounded bg-gray-300"></div>
            </div>

            <div className="h-15 w-15 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="mb-4 h-8 w-40 rounded bg-gray-300"></div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div className="h-4 w-24 rounded bg-gray-200"></div>

              <div className="mt-6 flex items-end justify-between">
                <div className="h-10 w-16 rounded bg-gray-300"></div>

                <div className="h-10 w-10 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}