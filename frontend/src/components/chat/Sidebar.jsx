import { PenSquare, MessageSquare } from "lucide-react";
import { Skeleton } from "#components/ui/skeleton.jsx";

export default function Sidebar({
  conversation,
  isLoading,
  activeConversationId,
  fetchMessages,
  createConversation,
}) {
  return (
    <aside className="flex h-full flex-col bg-white">

      {/* Header */}
      <div className="border-b border-indigo-100 p-4">
        <button
          onClick={createConversation}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]"
        >
          <PenSquare className="h-4 w-4" />
          New Chat
        </button>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto p-3">

        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-12 w-full rounded-xl bg-indigo-100"
              />
            ))}
          </div>
        ) : conversation.length === 0 ? (
          <div className="mt-16 flex flex-col items-center text-center">
            <MessageSquare className="mb-3 h-10 w-10 text-indigo-300" />
            <p className="text-sm font-medium text-gray-700">
              No conversations
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Start your first AI chat.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {conversation.map((conv) => (
              <button
                key={conv.id}
                onClick={() => fetchMessages(conv.id)}
                className={`group flex w-full items-center rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                  conv.id === activeConversationId
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-indigo-50"
                }`}
              >
                <MessageSquare
                  className={`mr-3 h-4 w-4 shrink-0 ${
                    conv.id === activeConversationId
                      ? "text-white"
                      : "text-indigo-500"
                  }`}
                />

                <span className="truncate text-sm font-medium">
                  {conv.title || "New Chat"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}