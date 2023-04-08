import expess from "express";
import { getServices, createServices } from "../controller/services.js";
import auth from "../middleware/auth.js";

const router = expess.Router();

router.get("/get", getServices);
router.post("/create", auth, createServices);

export default router;
