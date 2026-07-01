import {
  createConversation,
  getAllConversations,
  updateConversation,
  createChatMessage,
  getMessages,
  deleteConversation,
} from "../db/chat.query";
import { ApiError } from "../utils/AppError";

export async function getConversationsService(user_id) {
  const result = await getAllConversations(user_id);
  return result;
}

export async function getMessagesService(user_id, conv_id) {
  const result = await getMessages(user_id, conv_id);
  return result;
}

export async function createConversationService(
  user_id,
  conv_id,
  role,
  content,
) {
 
    if (content.trim()) {
      throw new ApiError(400, "Enter a valid message!");
    }
    if (content.length > 1000) {
      throw new ApiError(400, "Propt length is exceeding the limit!");
    }
    
    const messageHistory = await getMessages(user_id, conv_id)

    const history = messageHistory.map((role, content)=>({role: role, content: content}))

    const isFirstMessage = history.length === 0 

    const message = ["System prompt", {history}, {role, content}]
}
