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
  const { id } = req.params;

  try {
    // Vérification que l'ID est présent
    if (!id) {
      return res.status(400).json({ message: "L'ID est requis." });
    }

    // Extraire les champs à partir de req.body
    const { text, cv, situation } = req.body;

    // Vérification des champs manquants
    if (!text || cv || !situation) {
      return res.status(400).json({
        message: "Les champs 'text', 'cv' et 'situation' sont requis.",
      });
    }

    // Mettre à jour les données dans la base
    const updatedAbout = await AboutModel.findByIdAndUpdate(
      id,
      { text, cv, situation },
      { new: true } // Retourne le document mis à jour
    );

    // Vérification si le document a été trouvé
    if (!updatedAbout) {
      return res.status(404).json({ message: "Données 'about' non trouvées." });
    }

    // Retourner le document mis à jour avec succès
    return res.status(200).json({
      message: "Données 'about' mises à jour avec succès.",
      updatedAbout,
    });
  } catch (error) {
    // Gestion des erreurs serveur
    return res.status(500).json({
      message: "Erreur lors de la mise à jour des données 'about'.",
      error,
    });
  }
};
