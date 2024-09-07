import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connecté");
  } catch (err) {
    console.error("Erreur de connexion à MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
