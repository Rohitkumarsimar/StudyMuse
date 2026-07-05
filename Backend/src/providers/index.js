import * as groqProvider from "./groq.provider.js";
import * as ollamaProvider from "./ollama.provider.js";

export const provider =
  process.env.AI_PROVIDER === "ollama" ? ollamaProvider : groqProvider;

