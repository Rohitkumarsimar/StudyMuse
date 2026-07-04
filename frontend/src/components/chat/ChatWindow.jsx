import { Message, MessageContent } from "../ui/message";
import { Bubble, BubbleContent } from "../ui/bubble";
import { Skeleton } from "#components/ui/skeleton.jsx";
import MarkdownRenderer from "./MarkdownRenderer";

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
                <MessageScrollerContent className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-3 py-5 sm:px-5 md:px-8 lg:px-10">
                  {messages.map((msg) => (
                    <MessageScrollerItem
                      key={msg.id}
                      scrollAnchor={
                        msg.id === messages[messages.length - 1]?.id
                      }
                    >
                      <Message align={msg.role === "user" ? "end" : "start"}>
                        <MessageContent>
                          <Bubble
                            variant={
                              msg.role === "assistant" ? "outline" : "default"
                            }
                            align={msg.role === "user" ? "end" : "start"}
                            className={
                              msg.role === "assistant"
                                ? "w-full max-w-full lg:max-w-4xl"
                                : "ml-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
                            }
                          >
                            <BubbleContent
                              className={
                                msg.role === "assistant"
                                  ? "px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5"
                                  : "px-4 py-3"
                              }
                            >
                              {msg.role === "assistant" ? (
                                <MarkdownRenderer content={msg.content} />
                              ) : (
                                <p className="whitespace-pre-wrap text-sm leading-6">
                                  {msg.content}
                                </p>
                              )}
                            </BubbleContent>
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

      
        <div className="mx-auto w-full max-w-4xl px-6 pb-5 md:pb-18 pt-4">
          <PromptInput
            sendMessage={sendMessage}
            activeConversationId={activeConversationId}
          />
        
      </div>
    </div>
  );
}
