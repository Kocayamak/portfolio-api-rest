import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeeper API..." });
});

app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);
