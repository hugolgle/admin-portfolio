import SkillsModel from "../models/skills.model.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await SkillsModel.find(); // Récupérer toutes les compétences
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des compétences",
      error,
    });
  }
};

export const addSkill = async (req, res) => {
  const { img, name } = req.body;

  try {
    const newSkill = new SkillsModel({
      img,
      name,
    });
    await newSkill.save();

    return res.status(201).json({
      message: "Compétence ajoutée avec succès",
      newSkill,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de l'ajout de la compétence",
      error,
    });
  }
};

export const editSkill = async (req, res) => {
  const { id } = req.params;
  const { img, name } = req.body;

  try {
    const updatedSkill = await SkillsModel.findByIdAndUpdate(
      id,
      { img, name },
      { new: true } // Retourner le document mis à jour
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Compétence non trouvée" });
    }

    return res.status(200).json({
      message: "Compétence mise à jour avec succès",
      updatedSkill,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour de l'Compétence",
      error,
    });
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSkill = await SkillsModel.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ message: "Compétence non trouvée" });
    }

    return res
      .status(200)
      .json({ message: "Compétence supprimée avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression de l'Compétence",
      error,
    });
  }
};
