import mongoose, { model, Schema } from "mongoose";

const paymentSchema = new Schema({
  trxnId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  paymentAt: { type: String, required: true, default: Date.now() },
  package: { type: Object, required: true },
});

const Payment = model("payments-history", paymentSchema);

export default Payment;
