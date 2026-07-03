import {
    getConversationsService,
    getMessagesService,
  sendMessageService,
  createCovnersationService,
  saveAssistantMessage,
} from "../services/chat.service.js";
import { response } from "../utils/apiResponse.js";
import { ApiError } from "../utils/AppError.js";

//get all conversation
export async function getAllConversationController(req, res, next){
    const user_id = req.user.id
    const result = await getConversationsService(user_id)
    return response(res, 200, result, "Fetched all conversations successfully")
}

//get messages for the current chat
export async function getMessageController(req, res, next){
    const user_id = req.user.id
    const conv_id = req.params.conv_id
    const result = await getMessagesService(user_id, conv_id)
    return response(res, 200, result, "Fetched all messages")
}

//create a new conversation
export async function createConversationController(req, res, next) {
  const user_id = req.user.id;
  const result = await createCovnersationService(user_id);
  return response(res, 200, result, "Created a conversation successfully.");
}

export async function sendMessageController(req, res, next) {
  const user_id = req.user.id;
  const conv_id = req.params.conv_id;
  const content = req.body.content;
  const stream = await sendMessageService(user_id, conv_id, content);

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");


  let finishedResult = "";

  try {
    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || "";
      if (text) {
        res.write(text);
        finishedResult += text;
      }

    }
    await saveAssistantMessage(conv_id, "assistant", finishedResult);
  } catch (err) {
    res.write("\n[Error: response was interrupted, please try again]");
  } finally {
    res.end();
  }
}
