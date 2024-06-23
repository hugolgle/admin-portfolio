import express from 'express';
import { addParcours, deleteParcours, editParcours, getParcours } from '../controllers/parcours.js';

const router = express.Router();

router.get("/", getParcours);
router.post("/", addParcours);
router.put("/:id", editParcours);
router.delete("/:id", deleteParcours);

export default router;
