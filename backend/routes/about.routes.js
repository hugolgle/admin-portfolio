import express from "express";
const router = express.Router();
import { getAbout, updateAbout } from "../controllers/about.controller.js";

router.get("/", getAbout);
router.put("/:id", updateAbout);

export default router;
