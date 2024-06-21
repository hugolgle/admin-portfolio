import connectDB from '../config/db.js';

export const getXpPro = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM xpPro';

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

export const addXpPro = async (req, res) => {
    const dbConnection = connectDB();
    const { contrat, domaine, annee, titre, mission } = req.body;
    const insertSql = 'INSERT INTO xpPro (contrat, domaine, annee, titre, mission) VALUES (?, ?, ?, ?, ?)';

    try {
        dbConnection.query(insertSql, [contrat, domaine, annee, titre, mission], (error, results) => {
            if (error) {
                console.error('Erreur lors de l\'exécution de la requête SQL:', error);
                return res.status(500).json({ message: "Erreur lors de l'ajout de l'expérience professionnelle", error });
            }
            return res.status(201).json({ message: "Expérience professionnelle ajoutée avec succès", xpProId: results.insertId });
        });
    } catch (error) {
        console.error('Erreur dans le bloc try-catch:', error);
        return res.status(500).json({ message: "Erreur lors de l'ajout de l'expérience professionnelle", error });
    } finally {
        dbConnection.end();
    }
};
