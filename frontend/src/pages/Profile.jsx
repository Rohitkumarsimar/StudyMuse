import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { CircleUserRound, LogOut, Trash2 } from "lucide-react";
import {Spinner} from "../components/ui/spinner.jsx";
import { useAuth } from "#hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate()
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


 const { logout } = useAuth();
  function handleLogout() {
    logout();
    navigate("/auth-page");
  }

  const [isOpen, setIsOpen] = useState(false)
  const openDialog = ()=> setIsOpen(true)
  const closeDialog = ()=> setIsOpen(false)

  async function handleDelete(){
    try{ 
      setIsLoading(true)
      await api.delete("/auth/deleteUser")
      navigate("/auth-page")
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner className="h-15 w-15 text-white" />
      </div>
    );
  if (!profile) return <div>Profile not found!</div>;

  

  return (
    <div className="flex justify-center h-full items-center">
      <div className="w-[90%] lg:w-full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
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

            <p className="mt-2 text-sm lg:text-lg font-semibold text-gray-900">
              {profile.name}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Email Address
            </p>

            <p className="mt-2 break-all text-sm lg:text-lg font-semibold text-gray-900">
              {profile.email}
            </p>
          </div>

 

 <button onClick={handleLogout} className="w-full cursor-pointer bg-indigo-100 flex items-center justify-center text-indigo-700 gap-2 px-2 py-1 border border-indigo-400 rounded-lg">
  Logout 
 <LogOut size={15}/> 
 </button>

 <button onClick={openDialog}  className="cursor-pointer w-full bg-red-200 flex items-center justify-center text-red-700 gap-2 px-2 py-1 border border-red-400 rounded-lg"> 
  Delete account
 <Trash2 size={15}/> 
 </button>

 {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Dark Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={closeDialog} 
          />

          {/* Dialog Content Box */}
          <div 
            className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-10"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the box
          >
            {/* Header */}
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              Confirm Action
            </h3>

            {/* Body */}
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to perform this action? This step cannot be undone.
              </p>
            </div>

            {/* Footer Action Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 cusros-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
              >
                Delete account
              </button>
            </div>
          </div>

        </div>
      )}
      
        </div>
      </div>
    </div>
  );
}
