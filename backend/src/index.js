import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.router.js";
import messageRoutes from "./routes/message.router.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// FIXED BODY SIZE LIMIT (apply BEFORE routes)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// COOKIES
app.use(cookieParser());

// ROUTES (after body limit)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// PRODUCTION FRONTEND
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

server.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
    connectDB();
});
