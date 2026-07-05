import { useEffect, useState } from "react";
import { api } from "#api/axios.js";
import { useNavigate } from "react-router-dom";

export function useChat() {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

const navigate = useNavigate()

  async function fetchConversation() {
    try {
      const result = await api.get("/chat");
      setConversation(result.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchConversation();
  }, []);

  // get all messages
  const [messages, setMessages] = useState([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  const [activeConversationId, setActiveConversationId] = useState(null);

  async function fetchMessages(conv_id) {
    try {
      setIsLoadingMessages(true);
      setActiveConversationId(conv_id);
      const result = await api.get(`/chat/${conv_id}`);
      setMessages(result.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingMessages(false);
    }
  }

  // create a conversation
  async function createConversation() {
    try {
      const result = await api.post("/chat/conversations");
      const newConversation = result.data.data;
      setConversation([result.data.data, ...conversation]);
      setActiveConversationId(result.data.data.id);
      setMessages([]);
      return newConversation;
    } catch (err) {
      console.log(err);
    }
  }

  // send message
  async function sendMessage(conv_id, content) {
    try {
      if (conv_id === null || undefined) {
        const result = await createConversation();
        console.log(result)
        conv_id = result.id;
        setActiveConversationId(conv_id)
        navigate(`/chat/${conv_id}`,{replace:true})
      }

      setMessages((prev) => [
        ...prev,
        { role: "user", content },
        { role: "assistant", content: "" },
      ]);
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}/chat/${conv_id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "text/event-stream",
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ content }),
        },
      );
      const reader = result.body.getReader();
      const decoder = new TextDecoder();

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop() || "";

        for (const event of events) {
          if (!event.startsWith("data: ")) continue;

          try {
            const data = JSON.parse(event.slice(6));
            if (data.error) {
              console.error(data.message);
              return;
            }

            const { text } = data;

            setMessages((prev) => {
              const updated = [...prev];
              const lastMessage = updated[updated.length - 1];

              updated[updated.length - 1] = {
                ...lastMessage,
                content: lastMessage.content + text,
              };

              return updated;
            });
          } catch (err) {
            console.error("Invalid SSE event:", event);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return {
    conversation,
    isLoading,
    messages,
    isLoadingMessages,
    activeConversationId,
    fetchMessages,
    createConversation,
    sendMessage,
  };
}
