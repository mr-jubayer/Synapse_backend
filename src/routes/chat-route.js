import { Router } from "express";
import { createNewChat } from "../controllers/create_new_chat.js";
import { getUserAllHistory } from "../controllers/getUserAllHistory.js";

const router = Router();

router.post("/create-chat", createNewChat);
router.get("/user-chats/:email", getUserAllHistory);

export { router as chatRoutes };
