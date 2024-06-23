import express from 'express';
import { addXpPro, deleteXpPro, editXpPro, getXpPros } from '../controllers/xpPro.js';

const router = express.Router();

router.get("/", getXpPros);
router.post("/", addXpPro);
router.put("/:id", editXpPro);
router.delete("/:id", deleteXpPro);

export default router;
