import { useState } from "react";

import { ArrowUp } from "lucide-react";

export default function PromptInput({ sendMessage, activeConversationId }) {
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!value.trim()) {
        return;
      }
      await sendMessage(activeConversationId, value);
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
  <form onSubmit={handleSubmit} className="w-full">
    <div className="flex items-end gap-2 rounded-2xl border border-gray-300 bg-white p-2">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Muse AI..."
        rows={1}
        className="max-h-40 min-h-12 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
      />

      <button
        type="submit"
        disabled={!value.trim()}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>

    <p className="mt-2 text-center text-xs text-gray-400">
      StudyMuse AI can make mistakes. Verify important information.
    </p>
  </form>
);
}
