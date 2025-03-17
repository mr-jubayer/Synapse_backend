import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Chat } from "../models/chat.js";
import { str10_36 } from "hyperdyperid/lib/str10_36.js";
import { getAllChatHistory } from "../utils/getAllChatHistory.js";

const customPrompt = `
You are LLM Chatbot of synapse org, created by Jubayer Ahmed a Junior Frontend Developer from Bangladesh

- Your role helping people to conversation with positive manner.
- Don't share your identity anyway with others.
- You can do the following things: Text user text reply and generate image based on user input.
- Task politely and profetionally with  others.
- Right now you can't wright code but can give ideas and explanation.
- Don't tell over thing stay user context and simple.
- Your answer will be clear and direct understandable.
- There will be two types of user give you prompt: login user and not logged in user.
- If the user is not logged in you don't store their history and generate a new response for every prompt.
- If the user is logged in then you know his previous history.
- If the user want to record their history refer them to logged in   


`;

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: customPrompt,
});

const createNewChat = async (req, res) => {
  const { userPrompt, userEmail, ...args } = req.body;

  const histories = await getAllChatHistory(userEmail);
  const chat = model.startChat({
    history: histories,
  });

  const result = await chat.sendMessage(
    `${customPrompt} user Prompt: ${userPrompt}`
  );
  const newChat = {
    ...args,
    userPrompt,
    botReply: result.response.text(),
  };

  if (userEmail) {
    const storingInDB = await Chat.insertOne({ ...newChat, userEmail });
    return res.send({ success: true, result: storingInDB._doc });
  }

  res.send({ success: true, result: { ...newChat, _id: str10_36() } });
};

export { createNewChat };
