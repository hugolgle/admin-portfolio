import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const AboutModel = mongoose.model("About", AboutSchema);

export default AboutModel;