import { Router } from "express";
import { createPaymentIntent } from "../controllers/create_payment_intent.js";
import { paymentHistory } from "../controllers/paymentHistory.js";

const router = Router();

router.post("/create-payment-intent", createPaymentIntent);
router.post("/payment-history", paymentHistory);

export { router as paymentRoutes };
