import connectDB from '../config/db.js';

export const getParcour = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM parcour';

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
