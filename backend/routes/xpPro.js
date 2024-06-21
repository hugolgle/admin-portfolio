import express from 'express';
import { addXpPro, getXpPro } from '../controllers/xpPro.js';

const router = express.Router();

router.get("/", getXpPro);
router.post("/", addXpPro);

export default router;
