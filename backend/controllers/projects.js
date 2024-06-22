import connectDB from '../config/db.js';

export const getProjects = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM projects';

    try {
        dbConnection.query(reqSql, (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la récupération des projets", error });
            }
            return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des projets", error });
    } finally {
        dbConnection.end();
    }
};

export const addProject = async (req, res) => {
    const dbConnection = connectDB();
    const { ecole, title, mission } = req.body;
    const insertSql = 'INSERT INTO projects (ecole, title, mission) VALUES (?, ?, ?)';

    try {
        dbConnection.query(insertSql, [ecole, title, mission], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de l'ajout du projet", error });
            }
            return res.status(201).json({ message: "Projet ajouté avec succès", projectId: results.insertId });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de l'ajout du projet", error });
    } finally {
        dbConnection.end();
    }
};

export const editProject = async (req, res) => {
    const dbConnection = connectDB();
    const { id } = req.params;
    const { ecole, title, mission } = req.body;
    const updateSql = 'UPDATE projects SET ecole = ?, title = ?, mission = ? WHERE id = ?';

    try {
        dbConnection.query(updateSql, [ecole, title, mission, id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la mise à jour du projet", error });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Projet non trouvé" });
            }
            return res.status(200).json({ message: "Projet mis à jour avec succès" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la mise à jour du projet", error });
    } finally {
        dbConnection.end();
    }
};

export const deleteProject = async (req, res) => {
    const dbConnection = connectDB();
    const { id } = req.params;
    const deleteSql = 'DELETE FROM projects WHERE id = ?';

    try {
        dbConnection.query(deleteSql, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la suppression du projet", error });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Projet non trouvé" });
            }
            return res.status(200).json({ message: "Projet supprimé avec succès" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la suppression du projet", error });
    } finally {
        dbConnection.end();
    }
};

