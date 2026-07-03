import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useChat } from "#hooks/useChat.js";
import ChatWindow from "#components/chat/ChatWindow.jsx";
import Sidebar from "#components/chat/Sidebar.jsx";

export default function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    conversation,
    isLoading,
    messages,
    isLoadingMessages,
    activeConversationId,
    fetchMessages,
    createConversation,
    sendMessage,
  } = useChat();

  const handleFetchMessages = (id) => {
    fetchMessages(id);
    setSidebarOpen(false);
  };

  return (
    <div className="relative flex h-full overflow-hidden bg-linear-to-br from-indigo-50 via-white to-white">


      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      
      <aside
        className={`
          fixed inset-y-0 left-0 z-40
          flex w-72 flex-col
          border-r border-indigo-100 bg-white
          transform transition-transform duration-300 ease-in-out

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:static
          lg:translate-x-0
          lg:flex
          lg:shrink-0
        `}
      >
      
        <div className="flex justify-end p-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-indigo-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Sidebar
          conversation={conversation}
          isLoading={isLoading}
          activeConversationId={activeConversationId}
          fetchMessages={handleFetchMessages}
          createConversation={createConversation}
        />
      </aside>

    
      <main className="flex min-h-0 min-w-0 flex-1 flex-col">

       
        <div className="flex h-14 items-center border-b border-indigo-100 bg-white px-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-indigo-50"
          >
            <Menu className="h-5 w-5 text-indigo-600" />
          </button>

          <h2 className="ml-3 text-lg font-semibold text-gray-800">
            StudyMuse AI
          </h2>
        </div>

        <ChatWindow
          messages={messages}
          isLoadingMessages={isLoadingMessages}
          sendMessage={sendMessage}
          activeConversationId={activeConversationId}
        />
      </main>
    </div>
  );
}