import express from "express";
import { checkDrugs } from "../controllers/interactionController.js";

const router = express.Router();

router.post("/check", checkDrugs);

export default router;








