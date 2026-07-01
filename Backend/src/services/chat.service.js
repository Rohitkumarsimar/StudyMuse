import {
  createConversation,
  getAllConversations,
  updateConversation,
  createChatMessage,
  getMessages,
  deleteConversation,
} from "../db/chat.query";
import { ApiError } from "../utils/AppError";

import { main } from "../utils/aiApi";

export async function getConversationsService(user_id) {
  const result = await getAllConversations(user_id);
  return result;
}

export async function getMessagesService(user_id, conv_id) {
  const result = await getMessages(user_id, conv_id);
  return result;
}

export async function startConversationService(
  user_id,
  conv_id,
  role,
  content,
) {
  if (content && content.trim().length < 1) {
    throw new ApiError(400, "Enter a valid message!");
  }
  if (content.length > 1000) {
    throw new ApiError(400, "Propt length is exceeding the limit!");
  }

  const history = await getMessages(user_id, conv_id);

  const messageHistory = history.map((element) => {
    const { role, content } = element;
    return { role, content };
  });

  main()
}