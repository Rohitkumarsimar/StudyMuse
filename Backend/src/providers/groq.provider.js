import Groq from "groq-sdk";
import "../utils/env.js"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateResponse(messageHistory, content) {
  const message = [
    {
      role: "system",
      content: process.env.SYSTEM_PROMPT,
    },
    ...messageHistory,
    {
      role: "user",
      content: content,
    },
  ];

  return await getGroqChatStream(message);
}

export async function getGroqChatStream(message) {
  return groq.chat.completions.create({
    messages: message,

    model: process.env.MODEL,

    temperature: 0.5,

    max_completion_tokens: 4096,

    top_p: 1,

    stop: null,

    stream: true,
  });
}


//title generation: 
export async function generateTitle(content) {
  const message = [
     {
      role: "system",
      content: process.env.TITLE_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: content,
    },
  ];

  const completion = await getGroqChatTitle(message);
  const result = completion.choices[0]?.message?.content || ""

  return result
}

export async function getGroqChatTitle(message) {
  return groq.chat.completions.create({
    messages: message,

    model: process.env.TITLE_MODEL,

    temperature: 0.5,

    max_completion_tokens: 4096,

    top_p: 1,

    stop: null,

    stream: false,
  });
}
