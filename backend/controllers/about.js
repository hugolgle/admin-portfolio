import connectDB from '../config/db.js';

export const getAbout = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM about';

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

export const updateAbout = async (req, res) => {
    const dbConnection = connectDB();

    const { id, text } = req.body;

    const updateSql = 'UPDATE about SET text = ? WHERE id = ?';

    try {
        dbConnection.query(updateSql, [text, id], (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la mise à jour des données 'about'", error });
            }
            return res.status(200).json({ message: "Les données 'about' ont été mises à jour avec succès", results });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la mise à jour des données 'about'", error });
    } finally {
        dbConnection.end();
    }
};
