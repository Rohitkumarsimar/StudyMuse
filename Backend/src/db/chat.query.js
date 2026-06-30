import { prisma } from "../config/prisma";

//creating the conversation:
export async function createConversation(user_id, title) {
  const result = await prisma.conversations.create({
    data: {
      user_id: user_id,
      title: title,
    },
  });
  return result;
}

//getting all conversations:
export async function getAllConversations(user_id) {
  const result = await prisma.conversations.findMany({
    where: {
      user_id: user_id,
    },
    orderBy: {
      updated_at: "desc",
    },
  });
  return result
}

//updating the conversation
export async function updateConversation(conv_id, title) {
  const result = await prisma.conversations.update({
    where: {
      id: conv_id,
    },
    data: {
      ...(title !== undefined ? { title: title } : {}),
    },
  });
  return result;
}

//creating a chat message:
export async function createChatMessage(conv_id, role, content) {
  const check = await prisma.conversations.findUnique({
    where: {
      id: conv_id,
    },
  });
  if (!check) {
    return null;
  }

  const result = await prisma.chats.create({
    data: {
      conv_id: conv_id,
      role: role,
      content: content,
    },
  });

  return result;
}

//get messages:
export async function getMessages(user_id, conv_id) {
  const check = await prisma.conversations.findUnique({
    where: {
      id: conv_id,
    },
  });
  if (!check) {
    return null;
  }
  if (check.user_id !== user_id) {
    return null;
  }

  const result = await prisma.chats.findMany({
    where: {
      conv_id: conv_id,
    },
    orderBy: {
      created_at: "asc",
    },
  });
  return result;
}

//delete conversation:
export async function deleteConversation(user_id, conv_id) {
  const check = await prisma.conversations.findUnique({
    where: {
      id: conv_id,
    },
  });
  if (!check) {
    return null;
  }
  if (check.user_id !== user_id) {
    return null;
  }

  const result = await prisma.conversations.delete({
    where: {
      id: conv_id,
    },
  });
  return result;
}
