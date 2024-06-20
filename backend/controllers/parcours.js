import connectDB from '../config/db.js';

export const getParcours = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM parcours';

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

export const addParcours = async (req, res) => {
    const dbConnection = connectDB();
    const { description, date } = req.body; // Assurez-vous que ces champs existent dans votre table parcours

    const insertSql = 'INSERT INTO parcours ( description, date) VALUES (?, ?)';

    try {
        dbConnection.query(insertSql, [description, date], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de l'ajout du projet", error });
            }
            return res.status(200).json({ message: "Le projet a été ajouté avec succès", results });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de l'ajout du projet", error });
    } finally {
        dbConnection.end();
    }
};

