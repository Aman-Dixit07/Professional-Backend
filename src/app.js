import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public")); //used to basically store the files to the server
app.use(cookieParser());

import userRoute from "./routes/user.route.js";

app.use("/api/v1", userRoute);

export { app };
