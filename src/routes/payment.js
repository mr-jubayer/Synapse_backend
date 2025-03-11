import { Router } from "express";
import { createPaymentIntent } from "../controllers/create_payment_intent.js";

const router = Router();

router.post("/create-payment-intent", createPaymentIntent);

export { router as paymentRoutes };
