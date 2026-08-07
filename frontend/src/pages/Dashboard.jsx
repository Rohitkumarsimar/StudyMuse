import { useState, useEffect } from "react";
import useMediaQuery from "#hooks/useMediaQuery.js";
import { api } from "../api/axios.js";
import { DashboardSkeleton } from "#components/dashboard/DashboardSkeleton.jsx";
import DesktopDashboard from "#components/dashboard/desktop/DesktopDashboard.jsx";
import MobileDashboard from "#components/dashboard/mobile/MobileDashboard.jsx";
import Footer from "#components/layouts/Footer.jsx";

export default function Dashboard() {
  const [stat, setStat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const result = await api.get("/dashboard");
        setStat(result.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

   const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isLoading) {
   return (
    <div className="mt-5">
    <DashboardSkeleton/>
    <Footer/>
    </div>
   )
  }
  if (!stat) return <div className="w-full h-full  flex flex-col justify-center items-center">
    <p className="text-3xl font-bold text-red-500 ">no data found!</p>
    <p className="text-md font-semibold text-red-500 ">Please try again later.</p>
    </div>;


  

  return isDesktop? (
   <DesktopDashboard stat = {stat}/>
  ):<MobileDashboard stat = {stat}/>
}
