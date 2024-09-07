import express from "express";
const router = express.Router();
import {
  addProject,
  deleteProject,
  editProject,
  getProjects,
} from "../controllers/projects.controller.js";

router.get("/", getProjects);
router.post("/", addProject);
router.put("/:id", editProject);
router.delete("/:id", deleteProject);

export default router;
