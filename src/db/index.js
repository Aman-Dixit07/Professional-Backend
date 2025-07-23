import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDb = async () => {
  try {
    const connecter = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`mongodb connected to ${connecter.connection.host}`);
  } catch (error) {
    console.error("Error in connectDb: ", error);
    process.exit(1);
  }
};
