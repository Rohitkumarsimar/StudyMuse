import { useState, useEffect } from "react";
import { useAcademicCatalog } from "#hooks/useAcademicCatalog.js";
import { api } from "#api/axios.js";
import { useStudyPlan } from "../../../hooks/useStudyPlan.js";

export function AcademicPlanForm() {
  const [selectedBoard, setSelectedBoard] = useState();
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedBook, setSelectedBook] = useState();
  const [selectedChapter, setSelectedChapter] = useState();

  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {createStudyPlan} = useStudyPlan()
//   const data = {
//     studyPlan_type: "ACADEMIC",
//     chapter_id: selectedChapter.id,
//     title: selectedChapter.name,
//     description: description,
//   };

  const { getAcademicCatalog, academicCatalog } = useAcademicCatalog();

  useEffect(() => {
    getAcademicCatalog()
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await createStudyPlan(data);
    } catch (err) {
      setError(err);
      console.Console(err);
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <input>
            </input>
        </form>
    </div>
  )
}
