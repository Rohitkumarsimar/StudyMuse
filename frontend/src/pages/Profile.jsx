import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { CircleUserRound } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const result = await api.get("/auth/profile");
        setProfile(result.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found!</div>;

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
    

        <div className="border-b border-gray-200 bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-8">
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <CircleUserRound className="h-16 w-16 text-white" />
            </div>

            <h1 className="mt-5 text-3xl font-bold text-white">
              {profile.name}
            </h1>

            <p className="mt-1 text-indigo-100">StudyMuse Member</p>
          </div>
        </div>


        <div className="space-y-5 p-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Username
            </p>

            <p className="mt-2 text-lg font-semibold text-gray-900">
              {profile.name}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Email Address
            </p>

            <p className="mt-2 break-all text-lg font-semibold text-gray-900">
              {profile.email}
            </p>
          </div>

          <button className="mt-2 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
