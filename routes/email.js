import express from "express";
import { sendEmail } from "../controller/sendEmail.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/send", sendEmail);

export default router;
