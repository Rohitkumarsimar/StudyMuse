import express from "express";

import dotenv from "dotenv";
dotenv.config();

import { logMethod } from "./src/middleware/logger.middleware.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { testRouter } from "./src/routes/test.routes.js";

const app = express();

const PORT = process.env.PORT;

app.use(logMethod);

app.use(express.json());

app.use("/auth", authRouter);
app.use("/test", testRouter);

app.listen(PORT || 3000, () => {
  console.log(`Server is connected to http://localhost:${PORT || 3000}`);
});
