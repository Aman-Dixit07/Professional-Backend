import dotenv, { config } from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import { connectDb } from "./db/index.js";

import express from "express";

dotenv.config();

connectDb();

/*
const app = express();
dotenv.config();cls

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR :", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting the db:", error);
    throw error;
  }
})();
*/
