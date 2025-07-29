import dotenv, { config } from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./db/index.js";

dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`SERVER STARTED AT ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGODB connection failed: ", error));

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
