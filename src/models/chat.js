import { model, Schema } from "mongoose";

const chatSchema = new Schema({
  userEmail: { type: String, required: false },
  userPrompt: { type: String, required: true },
  botReply: { type: String, required: true },
  image: { type: String },
  timestamp: { type: Date, required: true, default: new Date() },
});

const Chat = model("chat-history", chatSchema);
export { Chat };
