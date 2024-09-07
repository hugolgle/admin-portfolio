import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import aboutRoutes from "./routes/about.routes.js";
import careersRoutes from "./routes/careers.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import skillsRoutes from "./routes/skills.routes.js";
import xpProRoutes from "./routes/xpPro.routes.js";
import dotenv from "dotenv";
dotenv.config();

const port = 5001;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use route files
app.use("/about", aboutRoutes);
app.use("/careers", careersRoutes);
app.use("/projects", projectsRoutes);
app.use("/skills", skillsRoutes);
app.use("/xpPro", xpProRoutes);

app.listen(port, () => console.log(`Le serveur a démarré au port ${port}`));
