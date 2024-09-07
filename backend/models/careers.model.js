import mongoose from "mongoose";

const CareersSchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const CareersModel = mongoose.model("Careers", CareersSchema);

export default CareersModel;
