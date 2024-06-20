import express from 'express';
import { getParcour } from '../controllers/parcour.js';

const router = express.Router();

router.get("/", getParcour);

export default router;
