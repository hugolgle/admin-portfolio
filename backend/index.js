import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects.js';
import parcoursRouter from './routes/parcours.js';
import aboutRouter from './routes/about.js';
import xpProRouter from './routes/xpPro.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/projects", projectsRouter);
app.use("/parcours", parcoursRouter);
app.use("/about", aboutRouter);
app.use("/xpPro", xpProRouter);

app.listen(port, () => console.log(`Le serveur a démarré au port ${port}`));
