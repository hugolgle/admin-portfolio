import express from 'express';
import { addParcours, getParcours } from '../controllers/parcours.js';

const router = express.Router();

router.get("/", getParcours);
router.post("/", addParcours);

export default router;
