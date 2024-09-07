import CareersModel from "../models/careers.model.js";

export const getCareers = async (req, res) => {
  try {
    const careers = await CareersModel.find(); // Récupérer tous les Careers
    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des Careers",
      error,
    });
  }
};

export const addCareers = async (req, res) => {
  const { description, date } = req.body;

  try {
    const newCareers = new CareersModel({ description, date });
    await newCareers.save(); // Sauvegarder le Careers dans la base de données

    return res.status(200).json({
      message: "Le Careers a été ajouté avec succès",
      newCareers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de l'ajout du Careers",
      error,
    });
  }
};

export const editCareers = async (req, res) => {
  const { id } = req.params;
  const { date, description } = req.body;

  try {
    const updatedCareers = await CareersModel.findByIdAndUpdate(
      id,
      { date, description },
      { new: true } // Renvoie le document mis à jour
    );

    if (!updatedCareers) {
      return res.status(404).json({ message: "Careers non trouvé" });
    }

    return res.status(200).json({
      message: "Careers mis à jour avec succès",
      updatedCareers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour du Careers",
      error,
    });
  }
};

export const deleteCareers = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCareers = await CareersModel.findByIdAndDelete(id);

    if (!deletedCareers) {
      return res.status(404).json({ message: "Careers non trouvé" });
    }

    return res.status(200).json({ message: "Careers supprimé avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression du Careers",
      error,
    });
  }
};
