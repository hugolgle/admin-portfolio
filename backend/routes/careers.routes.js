import express from "express";
const router = express.Router();
import {
  addCareers,
  deleteCareers,
  editCareers,
  getCareers,
  getCareer,
} from "../controllers/careers.controller.js";

router.get("/", getCareers);
router.get("/:id", getCareer);
router.post("/", addCareers);
router.put("/:id", editCareers);
router.delete("/:id", deleteCareers);

export default router;
