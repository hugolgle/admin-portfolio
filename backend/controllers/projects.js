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

