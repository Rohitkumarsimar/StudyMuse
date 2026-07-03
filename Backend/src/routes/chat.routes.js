import express from "express";
import {
  sendMessageController,
  createConversationController,
  getAllConversationController,
  getMessageController
} from "../controllers/chat.controller.js";
import { asyncWrap } from "../utils/asyncWrapper.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import rateLimit from "express-rate-limit";
const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 15,
  keyGenerator: (req) => {
      return req.user.id
  },
  message: "Too many attempts, please try again after 1 minutes.",
});

export const chatRouter = express.Router();

//get all conversation
chatRouter.get('/', authMiddleware, asyncWrap(getAllConversationController))


//get all messages
chatRouter.get('/:conv_id', authMiddleware, asyncWrap(getMessageController))

//create conversation
chatRouter.post(
  "/conversations",
  authMiddleware,
  asyncWrap(createConversationController),
);

chatRouter.post(
  "/:conv_id",
  authMiddleware,
  authLimiter,
  asyncWrap(sendMessageController),
);
