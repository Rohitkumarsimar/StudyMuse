import ollama from "ollama";

export async function generateResponse(messageHistory, content) {
  try {
    const stream = await ollama.chat({
      model: process.env.OLLAMA_MODEL,
      messages: [
        {
          role: "user",
          content: content,
        },
    ],
    stream: true,
    });


    return stream;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export async function generateTitle(content) {
  try {
    const stream = await ollama.chat({
      model: process.env.OLLAMA_MODEL,
      messages: [
        {
          role: "user",
          content: content,
        },
    ],
    });


    return stream;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
