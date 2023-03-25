import expess from "express";
import { getServices, createServices } from "../controller/services.js";

const router = expess.Router();

router.get("/get", getServices);
router.post("/create", createServices);

export default router;
