import connectDB from '../config/db.js';

export const getParcours = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM parcours';

    try {
        dbConnection.query(reqSql, (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la récupération des parcours", error });
            }
            return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des parcours", error });
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
                return res.status(500).json({ message: "Erreur lors de l'ajout du parcours", error });
            }
            return res.status(200).json({ message: "Le parcours a été ajouté avec succès", results });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de l'ajout du parcours", error });
    } finally {
        dbConnection.end();
    }
};

export const editParcours = async (req, res) => {
    const dbConnection = connectDB();
    const { id } = req.params;
    const { date, description } = req.body;
    const updateSql = 'UPDATE parcours SET date = ?, description = ? WHERE id = ?';

    try {
        dbConnection.query(updateSql, [date, description, id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la mise à jour du parcours", error });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Parcours non trouvé" });
            }
            return res.status(200).json({ message: "Parcours mis à jour avec succès" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la mise à jour du parcours", error });
    } finally {
        dbConnection.end();
    }
};

export const deleteParcours = async (req, res) => {
    const dbConnection = connectDB();
    const { id } = req.params;
    const deleteSql = 'DELETE FROM parcours WHERE id = ?';

    try {
        dbConnection.query(deleteSql, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la suppression du parcours", error });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Parcours non trouvé" });
            }
            return res.status(200).json({ message: "Parcours supprimé avec succès" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la suppression du parcours", error });
    } finally {
        dbConnection.end();
    }
};