import { useState, useEffect } from "react";
import { api } from "../api/axios";
import {Input} from "../components/ui/input";
import { CircleUserRound } from "lucide-react";
import {Spinner} from "../components/ui/Spinner.jsx";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formError, setFormError] = useState("");

  const [editProfileData, setEditProfileData] = useState({
    name: "",
    email: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

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

  if (isLoading)
    return (
      <div className="flex align-middle justify-center">
        <Spinner className="h-15 w-15" />
      </div>
    );
  if (!profile) return <div>Profile not found!</div>;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsEditLoading(true);
    try {
      if (!editProfileData.name.trim() && !editProfileData.email.trim()) {
        setFormError("Please enter a new name or email.");

        return;
      }

      setFormError("");
      const payload = {};
      if (editProfileData.name) {
        payload.name = editProfileData.name;
      }
      if (editProfileData.email) {
        payload.email = editProfileData.email;
      }
      const result = await api.patch(`/auth/edit-profile`, payload);
      setProfile(result.data.data);
      setEditProfileData({ name: "", email: "" });
    } catch (err) {
      console.log(err);
      setFormError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setIsEditLoading(false);
    }
  }

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

          <Button
            variant={isEdit ? "ghost" : "default"}
            size="lg"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            {isEdit ? "Close Editor" : "Edit Profile"}
          </Button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isEdit ? "max-h-125 opacity-100 mt-5" : "max-h-0 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={editProfileData.name}
                onChange={(e) =>
                  setEditProfileData({
                    ...editProfileData,
                    name: e.target.value,
                  })
                }
              />

              <Input
                type="email"
                label="Email"
                value={editProfileData.email}
                onChange={(e) =>
                  setEditProfileData({
                    ...editProfileData,
                    email: e.target.value,
                  })
                }
              />
              {formError && <p className="text-sm text-red-500">{formError}</p>}

              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="lg"
                  type="button"
                  onClick={() => {
                    setIsEdit(false);
                    setEditProfileData({
                      name: profile.name,
                      email: profile.email,
                    });
                  }}
                >
                  Cancel
                </Button>

                <Button
                  variant="default"
                  size="lg"
                  isLoading={isEditLoading}
                  type="submit"
                >
                  Update Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
