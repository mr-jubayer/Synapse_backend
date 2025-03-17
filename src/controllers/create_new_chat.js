import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Chat } from "../models/chat.js";
import { str10_36 } from "hyperdyperid/lib/str10_36.js";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are a bot",
});

const createNewChat = async (req, res) => {
  const { userPrompt, userEmail, ...args } = req.body;

  const result = await model.generateContent(userPrompt);

  const newChat = {
    ...args,
    userPrompt,
    botReply: result.response.text(),
  };

  console.log(newChat);

  if (userEmail) {
    const storingInDB = await Chat.insertOne(newChat);
    return res.send({ success: true, result: storingInDB._doc });
  }

  res.send({ success: true, result: { ...newChat, _id: str10_36() } });
};

export { createNewChat };
