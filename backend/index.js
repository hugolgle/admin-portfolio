import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/projects", projectsRouter);

app.listen(port, () => console.log(`Le serveur a démarré au port ${port}`));
