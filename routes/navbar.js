import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, (req, res) => {
    res.json({ msg: "Welcome to the ContactKeeper API..." });
});

export default router;
