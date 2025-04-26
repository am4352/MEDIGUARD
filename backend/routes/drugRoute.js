import express from "express"
import { getDrugInteraction } from "../controllers/drugController.js";
const router = express.Router();
router.post("/interaction", getDrugInteraction);

export default router









