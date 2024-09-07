import mongoose from "mongoose";

const XpProSchema = new mongoose.Schema({
  contrat: { type: String, required: true },
  domaine: { type: String, required: true },
  annee: { type: String, required: true },
  titre: { type: String, required: true },
  mission: { type: String, required: true },
});

const XpProModel = mongoose.model("XpPro", XpProSchema);

export default XpProModel;
