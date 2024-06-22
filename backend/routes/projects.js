import express from 'express';
import { addProject, deleteProject, editProject, getProjects } from '../controllers/projects.js';

const router = express.Router();

router.get("/", getProjects);
router.post("/", addProject);
router.put("/:id", editProject);
router.delete("/:id", deleteProject);

export default router;
