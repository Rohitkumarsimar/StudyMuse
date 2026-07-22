import { useState, useEffect, useMemo } from "react";
import { api } from "../api/axios.js";
import Fuse from "fuse.js";
import { useDebounce } from "./useDebounce.js";

export function useStudyPlan() {
  const [studyPlans, setStudyPlans] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllStudyPlans() {
    setError(null);
    try {
      setIsLoading(true);
      const result = await api.get("/studyPlan");
      setStudyPlans(result.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllStudyPlans();
  }, []);

  async function createStudyPlan(data) {
    setError(null);
    try {
      setIsLoading(true);
      const result = await api.post("/studyPlan", data);
      setStudyPlans((prev) => [...prev, result.data.data]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateStudyPlan(id, data) {
    setError(null);
    try {
      setIsLoading(true);
      const result = await api.patch(`/studyPlan/${id}`, data);

      const updatedStudyPlan = studyPlans.map((plan) => {
        if (plan.id === id) {
          return result.data.data;
        }
        return plan;
      });

      setStudyPlans(updatedStudyPlan);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteStudyPlan(id) {
    setError(null);
    try {
      setIsLoading(true);
      await api.delete(`/studyPlan/${id}`);
      const newStudyPlan = studyPlans.filter((plan) => plan.id === id);
      setStudyPlans(newStudyPlan);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  // search query
  const [searchQuery, setSearchQuery] = useState("");

    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const fuse = useMemo(() => {
      return new Fuse(studyPlans, {
        keys: ["title", "description"],
      });
    }, [studyPlans]);

    const hasSearchQuery = debouncedSearchQuery.trim().length > 0;
    const searchResult = hasSearchQuery
      ? fuse.search(debouncedSearchQuery)
      : [];
    const filteredStudyPlans = hasSearchQuery
      ? searchResult.map(({ item }) => item)
      : studyPlans;


  return {
    getAllStudyPlans,
    createStudyPlan,
    updateStudyPlan,
    deleteStudyPlan,
   
   studyPlans: filteredStudyPlans,
    searchQuery,
    setSearchQuery
  };
}
