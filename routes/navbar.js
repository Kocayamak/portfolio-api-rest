import express from "express";
import auth from "../middleware/auth.js";
import { getNavbar , createNavbar } from "../controller/navbar.js";

const router = express.Router();

router.get("/get", auth, getNavbar);
router.post("/create", auth, createNavbar);

export default router;
