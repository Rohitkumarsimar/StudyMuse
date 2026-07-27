import { useState, useEffect } from "react";
import { useAcademicCatalog } from "#hooks/useAcademicCatalog.js";
import { useStudyPlan } from "../../../hooks/useStudyPlan.js";
import { Button } from "#components/ui/button.jsx";
import { Spinner } from "#components/ui/spinner.jsx";
import FormInput from "#components/login-signup/FormInput.jsx";

export function AcademicPlanForm() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const [description, setDescription] = useState("");

  const { createStudyPlan, isLoading } = useStudyPlan();
  const { getAcademicCatalog, academicCatalog } = useAcademicCatalog();

  useEffect(() => {
    getAcademicCatalog();
  }, []);

  // Walk through the tree only once
  const currentBoard = academicCatalog.find(
    (board) => board.id === selectedBoard,
  );

  const currentClass = currentBoard?.academicClasses.find(
    (cls) => cls.id === selectedClass,
  );

  const currentSubject = currentClass?.subjects.find(
    (subject) => subject.id === selectedSubject,
  );

  const currentBook = currentSubject?.books.find(
    (book) => book.id === selectedBook,
  );
  const currentChapter = currentBook?.chapters.find(
    (chapter) => chapter.id === selectedChapter,
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const academicData = {
      studyPlan_type: "ACADEMIC",
      chapter_id: selectedChapter,
      description,
    };

    await createStudyPlan(academicData);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Create Academic Plan
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Select your board, class, subject, book and chapter to generate a
          structured study plan.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Board */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Board</label>
          <select
            value={selectedBoard}
            onChange={(e) => {
              setSelectedBoard(e.target.value);
              setSelectedClass("");
              setSelectedSubject("");
              setSelectedBook("");
              setSelectedChapter("");
            }}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-all outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option value="">Choose Board</option>

            {academicCatalog.map((board) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </div>

        {/* Class */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Class</label>
          <select
            value={selectedClass}
            disabled={!selectedBoard}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedSubject("");
              setSelectedBook("");
              setSelectedChapter("");
            }}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-all outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option value="">Choose Class</option>

            {currentBoard?.academicClasses.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Subject</label>
          <select
            value={selectedSubject}
            disabled={!selectedClass}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedBook("");
              setSelectedChapter("");
            }}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-all outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option value="">Choose Subject</option>

            {currentClass?.subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        {/* Book */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Book</label>
          <select
            value={selectedBook}
            disabled={!selectedSubject}
            onChange={(e) => {
              setSelectedBook(e.target.value);
              setSelectedChapter("");
            }}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-all outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option value="">Choose Book</option>

            {currentSubject?.books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Chapter</label>
          <select
            value={selectedChapter}
            disabled={!selectedBook}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-all outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option value="">Choose Chapter</option>

            {currentBook?.chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.name}
              </option>
            ))}
          </select>
        </div>


</div>
       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={5}
          placeholder="Describe your study plan, goals, schedule or anything you'd like to remember..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full resize-none text-gray-600 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isLoading || !selectedChapter}
      >
        {isLoading && <Spinner className="mr-2 text-white" />}
        {isLoading ? "Creating Plan..." : "Create Academic Plan"}
      </Button>
    </form>
  );
}
