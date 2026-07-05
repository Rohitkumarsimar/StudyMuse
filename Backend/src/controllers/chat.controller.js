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
export async function getAllConversationController(req, res, next) {
  const user_id = req.user.id;
  const result = await getConversationsService(user_id);
  return response(res, 200, result, "Fetched all conversations successfully");
}

//get messages for the current chat
export async function getMessageController(req, res, next) {
  const user_id = req.user.id;
  const conv_id = req.params.conv_id;
  const result = await getMessagesService(user_id, conv_id);
  return response(res, 200, result, "Fetched all messages");
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

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  if (res.flush) res.flush();

  let finishedResult = "";

  try {
    for await (const chunk of stream) {
      let text = ""
      if (process.env.AI_PROVIDER === "ollama") {
        text = chunk.message?.content || "";
      }else{
      text = chunk.choices?.[0]?.delta?.content || "";
      }
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
        console.log("TEXT:", text);
        finishedResult += text;
      }
    }
    await saveAssistantMessage(conv_id, "assistant", finishedResult);
  } catch (err) {
    console.error("========== STREAM ERROR ==========");
    console.error("Message:", err.message);

    res.write(`event: error\n`);
    res.write(
      `data: ${JSON.stringify({
        message: "Response was interrupted. Please try again.",
      })}\n\n`,
    );
  } finally {
    res.end();
  }
}
