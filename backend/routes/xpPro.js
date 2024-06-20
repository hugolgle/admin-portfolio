import express from 'express';
import { getXpPro } from '../controllers/xpPro.js';

const router = express.Router();

router.get("/", getXpPro);

export default router;
