import "./src/utils/env.js"
import express from "express";
import cors from 'cors'
import helmet from "helmet";
import morgan from "morgan";
import { logMethod } from "./src/middleware/logger.middleware.js";
import { errorMiddleware } from "./src/middleware/error.middleware.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { dashboardRouter } from "./src/routes/dashboard.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { chatRouter } from "./src/routes/chat.routes.js";
import { studyPlanRouter } from "./src/routes/studyPlan.routes.js";

const app = express();
app.set("trust proxy", 1);
app.use(helmet())
app.use(morgan('dev'))
const PORT = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:5173','https://studymuseai.netlify.app', 'http://10.159.251.206:5173']
}))

app.use(logMethod);

app.use(express.json());

app.use("/auth", authRouter);
app.use("/dashboard",dashboardRouter);
app.use("/tasks",taskRouter);
app.use("/chat", chatRouter);
app.use("/studyPlan", studyPlanRouter);
app.use(errorMiddleware);

app.listen(PORT || 3000, '0.0.0.0', () => {
  console.log(`Server is connected to http://localhost:${PORT || 3000}`);
});
