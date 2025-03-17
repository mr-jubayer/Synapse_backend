import { Chat } from "../models/chat.js";

const getUserAllHistory = async (req, res) => {
  const result = await Chat.find({ userEmail: req.params.email });
  res.send(result);
};

export { getUserAllHistory };
