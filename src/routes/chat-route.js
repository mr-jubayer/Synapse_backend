import { Router } from "express";
import { createNewChat } from "../controllers/create_new_chat.js";

const router = Router();

router.post("/create-chat", createNewChat);

export { router as chatRoutes };
