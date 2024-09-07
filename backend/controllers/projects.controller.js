import ProjectModel from "../models/projects.model.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find(); // Récupérer tous les projets
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des projets",
      error,
    });
  }
};

export const addProject = async (req, res) => {
  const { title, date, context, link, mission, skills, technology } = req.body;

  try {
    const newProject = new ProjectModel({
      title,
      date,
      context,
      link,
      mission,
      skills,
      technology,
    });
    await newProject.save(); // Sauvegarder le projet dans la base de données

    return res.status(201).json({
      message: "Projet ajouté avec succès",
      newProject,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de l'ajout du projet",
      error,
    });
  }
};

export const editProject = async (req, res) => {
  const { id } = req.params;
  const { title, date, context, link, mission, skills, technology } = req.body;

  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      { title, date, context, link, mission, skills, technology },
      { new: true } // Pour renvoyer le document mis à jour
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    return res.status(200).json({
      message: "Projet mis à jour avec succès",
      updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la mise à jour du projet",
      error,
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    return res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression du projet",
      error,
    });
  }
};
