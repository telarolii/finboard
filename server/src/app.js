import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    message: "server is running",
  });
});

export default app;
