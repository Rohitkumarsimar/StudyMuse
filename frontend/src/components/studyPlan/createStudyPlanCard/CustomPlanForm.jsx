import { useState } from "react";
import { useStudyPlan } from "../../../hooks/useStudyPlan.js";
import { Button } from "#components/ui/button.jsx";
import { Spinner } from "#components/ui/spinner.jsx";
import FormInput from "#components/login-signup/FormInput.jsx";

export function CustomPlanForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { createStudyPlan, isLoading } = useStudyPlan();

  async function handleSubmit(e) {
    e.preventDefault();

    const customPlan = {
      studyPlan_type: "CUSTOM",
      ...formData,
    };

    await createStudyPlan(customPlan);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col gap-6"
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Create Custom Plan
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Build your own study roadmap for any topic, exam or personal goal.
        </p>
      </div>

      {/* Title */}
      <FormInput
        label="Plan Title"
        placeholder="e.g. Learn React in 30 Days"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
        className={"text-sm border border-gray text-gray-600"}
      />

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={5}
          placeholder="Describe your study plan, goals, schedule or anything you'd like to remember..."
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition-all focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
        />
      </div>

      {/* Button */}
      <Button
        type="submit"
        disabled={isLoading}
        size="lg"
        className="w-full"
      >
        {isLoading && (
          <Spinner className="mr-2 text-white" />
        )}

        {isLoading ? "Creating Plan..." : "Create Custom Plan"}
      </Button>
    </form>
  );
}