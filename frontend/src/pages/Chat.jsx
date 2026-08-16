import { useState } from "react";
import { Menu, X, EllipsisVertical, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "#hooks/useAuth.js";
import { useChat } from "#hooks/useChat.js";
import ChatWindow from "#components/chat/ChatWindow.jsx";
import Sidebar from "#components/chat/Sidebar.jsx";
import NavLinks from "#components/layouts/NavLinks.jsx";
import { Sheet, SheetContent, SheetTrigger } from "#components/ui/sheet";

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

  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
    setNavOpen(false);
  }
// lg:bg-linear-to-br lg:from-indigo-50 lg:via-white lg:to-white
  return (
    <div className="relative flex h-dvh overflow-hidden bg-linear-to-t from-black ">
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
          border-r border-gray-400 bg-white
          transform transition-transform duration-300 ease-in-out

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:static
          lg:translate-x-0
          lg:flex
          lg:shrink-0
        `}
      >
        <Sidebar
          closeSidebar={() => setSidebarOpen(false)}
          conversation={conversation}
          isLoading={isLoading}
          activeConversationId={activeConversationId}
          fetchMessages={handleFetchMessages}
          createConversation={createConversation}
        />
      </aside>

      <main className="flex min-h-0 min-w-0 flex-1 flex-col pb-11 lg:pb-0">
        <div className="flex h-14 items-center justify-between border-b border-indigo-100 bg-white px-4 lg:hidden">
          {/* Conversations */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-indigo-50"
          >
            <Menu className="h-5 w-5 text-black" />
          </button>

          <h2 className="text-lg font-semibold text-gray-900">StudyMuse AI</h2>

          <Sheet open={navOpen} onOpenChange={setNavOpen}>
            <SheetTrigger asChild>
              <button className="rounded-lg p-2 transition hover:bg-indigo-50">
                <EllipsisVertical className="h-5 w-5 text-gray-950" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="flex gap-2 mt-4 ml-5">
                <GraduationCap className={`h-7 w-7 text-gray-800`} />

                <h1 className="text-xl  font-bold tracking-tight text-gray-900">
                  StudyMuse
                </h1>
              </div>
              <div className="border border-gray-200"></div>
              <div className="mt-1 flex flex-col gap-2">
                <NavLinks onNavigate={() => setNavOpen(false)} />

                <button
                  onClick={handleLogout}
                  className="mt-4 rounded-xl px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </SheetContent>
          </Sheet>
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
