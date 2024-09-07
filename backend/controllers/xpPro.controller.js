import XpProModel from "../models/xpPro.model.js";

export const getXpPro = async (req, res) => {
  try {
    const xpPros = await XpProModel.find(); // Récupérer toutes les expériences professionnelles
    return res.status(200).json(xpPros);
  } catch (error) {
    return res.status(500).json({
      message:
        "Erreur lors de la récupération des expériences professionnelles",
      error,
    });
  }
};

export const addXpPro = async (req, res) => {
  const {
    type,
    domaine,
    title,
    mission,
    context,
    text,
    skills,
    link,
    date,
    img,
  } = req.body;

  try {
    const newXpPro = new XpProModel({
      type,
      domaine,
      title,
      mission,
      context,
      text,
      skills,
      link,
      date,
      img,
    });
    await newXpPro.save(); // Sauvegarder l'expérience professionnelle

    return res.status(201).json({
      message: "Expérience professionnelle ajoutée avec succès",
      newXpPro,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de l'ajout de l'expérience professionnelle",
      error,
    });
  }
};

export const editXpPro = async (req, res) => {
  const { id } = req.params;
  const {
    type,
    domaine,
    title,
    mission,
    context,
    text,
    skills,
    link,
    date,
    img,
  } = req.body;

  try {
    const updatedXpPro = await XpProModel.findByIdAndUpdate(
      id,
      { type, domaine, title, mission, context, text, skills, link, date, img },
      { new: true } // Retourner le document mis à jour
    );

    if (!updatedXpPro) {
      return res
        .status(404)
        .json({ message: "Expérience professionnelle non trouvée" });
    }

    return res.status(200).json({
      message: "Expérience professionnelle mise à jour avec succès",
      updatedXpPro,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour de l'expérience professionnelle",
      error,
    });
  }
};

export const deleteXpPro = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedXpPro = await XpProModel.findByIdAndDelete(id);

    if (!deletedXpPro) {
      return res
        .status(404)
        .json({ message: "Expérience professionnelle non trouvée" });
    }

    return res
      .status(200)
      .json({ message: "Expérience professionnelle supprimée avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression de l'expérience professionnelle",
      error,
    });
  }
};
