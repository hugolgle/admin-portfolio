import AboutModel from "../models/about.model.js";

export const getAbout = async (req, res) => {
  try {
    const aboutData = await AboutModel.find();
    console.log(aboutData);
    return res.status(200).json(aboutData);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des données 'about'",
      error,
    });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const updatedAbout = await AboutModel.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    if (!updatedAbout) {
      return res.status(404).json({ message: "Données 'about' non trouvées" });
    }
    return res.status(200).json({
      message: "Données 'about' mises à jour avec succès",
      updatedAbout,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour des données 'about'",
      error,
    });
  }
};
