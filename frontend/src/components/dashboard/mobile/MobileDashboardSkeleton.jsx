export default function MobileDashboardSkeleton() {
  return (
    <div className="my-2 animate-pulse ">
      <main className="space-y-4">

        {/* HeroCard skeleton */}
        <div className="mx-2 rounded-lg bg-white py-4 px-5">
          <div className="flex w-full justify-between">
            <div className="w-[60%]">
              {/* StudyMuse badge */}
              <div className="h-5 w-24 rounded-full bg-gray-200" />

              {/* Welcome heading */}
              <div className="mt-3 h-5 w-44 rounded bg-gray-200" />

              {/* Description */}
              <div className="mt-2 space-y-2">
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-4/5 rounded bg-gray-200" />
              </div>
            </div>

            {/* Hero image */}
            <div className="h-20 w-20 rounded-lg bg-gray-200" />
          </div>

          {/* Buttons */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-11 rounded-xl bg-gray-200" />
            <div className="h-11 rounded-xl bg-gray-200" />
          </div>
        </div>


        {/* Stat skeleton */}
        <div className="mx-2 flex gap-2 overflow-hidden">

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex h-40 w-35 shrink-0 flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5"
            >
              {/* Icon */}
              <div className="h-10 w-10 rounded-full bg-gray-200" />

              {/* Label + number */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="h-3 w-20 rounded bg-gray-200" />
                <div className="h-7 w-12 rounded bg-gray-200" />
              </div>
            </div>
          ))}

        </div>


        {/* Streak skeleton */}
        <div className="mx-2 rounded-2xl bg-gray-200 p-4">

          <div className="h-4 w-28 rounded bg-gray-300" />

          <div className="mt-2 flex items-center justify-between">

            <div>
              {/* Streak number */}
              <div className="h-12 w-32 rounded bg-gray-300" />

              {/* Description */}
              <div className="mt-2 space-y-2">
                <div className="h-3 w-52 rounded bg-gray-300" />
                <div className="h-3 w-40 rounded bg-gray-300" />
              </div>
            </div>

            {/* Flame */}
            <div className="h-14 w-14 rounded-full bg-gray-300" />
          </div>

          {/* Days */}
          <div className="mt-4 flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                className="h-9 w-9 rounded-full bg-gray-300"
              />
            ))}
          </div>

        </div>


        {/* Overview skeleton */}
        <div className="mx-2 flex h-55 items-center justify-center rounded-lg bg-white">

          <div className="h-[95%] w-[97%] rounded-lg border border-gray-200 bg-gray-100 p-5">

            {/* Muse says */}
            <div className="h-6 w-28 rounded bg-gray-200" />

            {/* Text */}
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-11/12 rounded bg-gray-200" />
              <div className="h-3 w-4/5 rounded bg-gray-200" />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}