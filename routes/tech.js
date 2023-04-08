import express from "express";
import { getTech, createTech } from "../controller/tech.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/get", getTech);
router.post("/create", auth, createTech);

export default router;
