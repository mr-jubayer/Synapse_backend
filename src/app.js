import express from "express";
import { applyMiddlewares } from "./middlewares/index.js";
import { userRoutes } from "./routes/users.js";

const app = express();
applyMiddlewares(app);

// routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server running well!");
});

app.get("/health", (req, res) => {
  res.send("Server health is okey!");
});

export { app };
