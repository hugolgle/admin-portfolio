import mongoose from "mongoose";

const XpProSchema = new mongoose.Schema({
  type: { type: String, required: true },
  domaine: { type: String, required: true },
  title: { type: String, required: true },
  mission: { type: String, required: true },
  context: { type: String, required: true },
  text: { type: String, required: true },
  skills: { type: Array, required: true },
  link: { type: Array, required: true },
  date: { type: String, required: true },
  img: { type: Array, required: true },
});

const XpProModel = mongoose.model("XpPro", XpProSchema);

export default XpProModel;
