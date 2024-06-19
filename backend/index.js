import express from 'express';
import mysql from 'mysql';

const port = process.env.PORT || 5001;

const app = express();



app.get("/", (req, res) => {
    const connexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portfolio",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    })

    connexion.connect((err) => {
        if (err) {
            console.log("erreur de connexion", err.stack)
            return;
        }
        console.log("Connexion reussi à la bdd !");
    })

    connexion.query("SELECT * FROM xpPro", (err, rows, fields) => {
        if (err) throw err;
        res.json(rows)
    })

    connexion.end();
})

app.listen(port, () => {
    console.log("Le serveur est en ligne !");
});
