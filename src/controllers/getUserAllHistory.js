import { Chat } from "../models/chat.js";

const getUserAllHistory = async (req, res) => {
  const { email } = req.params.email;
  const result = await Chat.find({ email });

  res.send(result);
};

export { getUserAllHistory };
