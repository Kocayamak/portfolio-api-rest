import express from "express";
import auth from "../middleware/auth.js";

import {
  getExperiences,
  createExperiences,
} from "../controller/experiences.js";

const router = express.Router();

router.get("/get", auth, getExperiences);
router.post("/create", auth, createExperiences);

export default router;
