import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  userId: { type: String, required: true },
  photo: { type: String, required: true },
  premium: { type: Number, required: true, default: 0 },
  created_at: { type: Date, required: true },
  role: { type: String, required: true, default: "user" },
});

const User = model("users", userSchema);

export { User };
