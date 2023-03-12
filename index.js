import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeeper API..." });
});

const startServer = async () => {
  try {
    connectDB();
    app.listen(port, () =>
      console.log(`Server started on port http://localhost:${port}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
