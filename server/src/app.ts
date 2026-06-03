import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes";
import {
  globalErrorHandler,
} from "./middleware/error.middleware";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_APP_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(morgan("dev"));

app.use("/api", routes);

app.use(globalErrorHandler);

app.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "Server Running",
  });
});

export default app;