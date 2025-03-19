import cors from "cors";
import express from "express";
import { globalError } from "./global_error.js";

const CLIENT_SIDE_URL = "https://synapse-776a2.web.app/";

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
