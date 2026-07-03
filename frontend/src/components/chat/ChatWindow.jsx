import { Message, MessageContent } from "../ui/message";
import { Bubble, BubbleContent } from "../ui/bubble";
import { Skeleton } from "#components/ui/skeleton.jsx";

import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "../ui/message-scroller";

import PromptInput from "./PromptInput";

export default function ChatWindow({
  messages,
  isLoadingMessages,
  sendMessage,
  activeConversationId,
}) {
  return (
  <div className="flex h-full min-h-0 flex-col">

    
    <div className="flex-1 min-h-0">
      {isLoadingMessages ? (
        <div className="mx-auto flex h-full max-w-4xl flex-col gap-5 p-8">
          <Skeleton className="h-12 w-2/3 rounded-2xl bg-indigo-100" />
          <Skeleton className="ml-auto h-12 w-1/2 rounded-2xl bg-indigo-100" />
          <Skeleton className="h-18 w-3/5 rounded-2xl bg-indigo-100" />
          <Skeleton className="ml-auto h-12 w-1/2 rounded-2xl bg-indigo-100" />
          <Skeleton className="h-25 w-3/5 rounded-2xl bg-indigo-100" />
        </div>
      ) : (
        <MessageScrollerProvider>
          <MessageScroller className="h-full">
            <MessageScrollerViewport className="h-full overflow-y-auto">
              <MessageScrollerContent className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 pt-8 pb-6">

                {messages.map((msg) => (
                  <MessageScrollerItem
                    key={msg.id}
                    scrollAnchor={
                      msg.id === messages[messages.length - 1]?.id
                    }
                  >
                    <Message align={msg.role === "user" ? "end" : "start"}>
                      <MessageContent>
                        <Bubble>
                          <BubbleContent>{msg.content}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}

              </MessageScrollerContent>
            </MessageScrollerViewport>

            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      )}
    </div>

    
    <div className="shrink-0 border-t border-indigo-100 bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 pb-8 pt-4">
        <PromptInput
          sendMessage={sendMessage}
          activeConversationId={activeConversationId}
        />
      </div>
    </div>

  </div>
);
}
