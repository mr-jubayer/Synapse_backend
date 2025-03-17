import { Chat } from "../models/chat.js";

const getAllChatHistory = async (userEmail) => {
  const histories = await Chat.find({ userEmail: userEmail });
  const arr = [];

  for (let a = 0; a < histories.length; a++) {
    arr.push({
      role: "user",
      parts: [{ text: histories[a].userPrompt }],
    });

    arr.push({
      role: "model",
      parts: [{ text: histories[a].botReply }],
    });
  }

  return arr;
};

export { getAllChatHistory };
