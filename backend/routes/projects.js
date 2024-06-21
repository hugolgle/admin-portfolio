import express from 'express';
import { addProject, getProjects } from '../controllers/projects.js';

const router = express.Router();

router.get("/", getProjects);
router.post("/", addProject);

export default router;
