import {
  createConversation,
  getAllConversations,
  updateConversation,
  createChatMessage,
  getMessages,
  deleteConversation,
} from "../db/chat.query.js";
import { ApiError } from "../utils/AppError.js";

import { generateResponse, generateTitle } from "../providers/groq.provider.js";

//get all conversations on clicking at chat page
export async function getConversationsService(user_id) {
  const result = await getAllConversations(user_id);
  return result;
}

// get all messages of an existing chat
export async function getMessagesService(user_id, conv_id) {
  const result = await getMessages(user_id, conv_id);
  return result;
}

// create a conversation
export async function createCovnersationService(user_id) {
  const result = await createConversation(user_id, "New conversation");
  return result;
}

//save assitant message
export async function saveAssistantMessage(conv_id, role, content) {
  await createChatMessage(conv_id, role, content);
}

// conversation service
export async function sendMessageService(user_id, conv_id, content) {
  if (!content || !content.trim()) {
    throw new ApiError(400, "Enter a valid message!");
  }
  if (content.length > 1000) {
    throw new ApiError(400, "Prompt length is exceeding the limit!");
  }

  const history = await getMessages(user_id, conv_id)

  const messageHistory = history.map((element) => {
    const { role, content } = element;
    return { role, content };
  }).slice(-2);

  const isFirstMessage = history.length === 0;
  let title = "";
  if (isFirstMessage) {
    try {
      title = await generateTitle(content);
    } catch (err) {
      console.error("Title generation failed:", err.message);
      title = "New Conversation";
    }
  }

  const stream = await generateResponse(messageHistory, content);

    await createChatMessage(conv_id, "user", content);
  

  await updateConversation(conv_id, isFirstMessage ? title : undefined);

  return stream;
}
