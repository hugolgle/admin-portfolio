import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  context: { type: String, required: true },
  link: { type: Array, required: true },
  mission: { type: String, required: true },
  skills: { type: Array, required: true },
  technology: { type: Array, required: true },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;
