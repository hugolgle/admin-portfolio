import express from "express";
const router = express.Router();
import {
  addSkill,
  deleteSkill,
  editSkill,
  getSkills,
} from "../controllers/skills.controller.js";

router.get("/", getSkills);
router.post("/", addSkill);
router.put("/:id", editSkill);
router.delete("/:id", deleteSkill);

export default router;
