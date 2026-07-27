import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AcademicPlanForm } from "./AcademicPlanForm";
import { CustomPlanForm } from "./CustomPlanForm";

export function StudyPlanCard() {
  const [activeTab, setActiveTab] = useState("ACADEMIC");

  return (
    <motion.div
      initial={{
        opacity: 0,
        rotateY: -8,
        scale: 0.96,
        x: -30,
      }}
      animate={{
        opacity: 1,
        rotateY: 0,
        scale: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        rotateY: 8,
        scale: 0.96,
        x: 30,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl lg:min-h-155"
    >
      {/* Toggle */}
      <div className="mb-8 flex rounded-xl bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("ACADEMIC")}
          className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
            activeTab === "ACADEMIC"
              ? "bg-indigo-600 text-white shadow"
              : "text-gray-600 hover:bg-white hover:text-gray-900"
          }`}
        >
          Academic Plan
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("CUSTOM")}
          className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
            activeTab === "CUSTOM"
              ? "bg-indigo-600 text-white shadow"
              : "text-gray-600 hover:bg-white hover:text-gray-900"
          }`}
        >
          Custom Plan
        </button>
      </div>

      {/* Forms */}
      <AnimatePresence mode="wait">
        {activeTab === "ACADEMIC" ? (
          <motion.div
            key="academic"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.2 }}
          >
            <AcademicPlanForm />
          </motion.div>
        ) : (
          <motion.div
            key="custom"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
          >
            <CustomPlanForm />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}