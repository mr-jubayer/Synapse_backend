import cors from "cors";
import express from "express";
import { globalError } from "./global_error.js";

const CLIENT_SIDE_URL = "http://localhost:5173";

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: CLIENT_SIDE_URL,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    })
  );
  app.use(express.json());
  app.use(globalError);
};

export { applyMiddlewares };
