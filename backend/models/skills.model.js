import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
});

const SkillsModel = mongoose.model("Skills", SkillsSchema);

export default SkillsModel;
