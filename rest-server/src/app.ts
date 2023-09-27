// src/app.ts
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
dotenv.config();
import { issuesRouter } from "./issues/issues.router";
import { dataSource } from "./app-data-source";

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1/issues", issuesRouter);

export default app;
