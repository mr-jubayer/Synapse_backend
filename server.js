import "dotenv/config";
import { app } from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

const port = process.env.PORT || 40002;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server running port on : ${port}`);
  });
});
