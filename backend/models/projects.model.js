import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  ecole: { type: String, required: true },
  title: { type: String, required: true },
  mission: { type: String, required: true },
  link: { type: String, required: true },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;
