import express from "express";
const router = express.Router();
import {
  addCareers,
  deleteCareers,
  editCareers,
  getCareers,
} from "../controllers/careers.controller.js";

router.get("/", getCareers);
router.post("/", addCareers);
router.put("/:id", editCareers);
router.delete("/:id", deleteCareers);

export default router;
