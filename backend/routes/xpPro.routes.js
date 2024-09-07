import express from "express";
const router = express.Router();
import {
  addXpPro,
  deleteXpPro,
  editXpPro,
  getXpPro,
} from "../controllers/xpPro.controller.js";

router.get("/", getXpPro);
router.post("/", addXpPro);
router.put("/:id", editXpPro);
router.delete("/:id", deleteXpPro);

export default router;
