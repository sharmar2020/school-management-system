import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);

export default app;
