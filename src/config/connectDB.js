import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/synapse_db";

const connectDB = () => {
  return mongoose.connect(uri);
};

export default connectDB;
