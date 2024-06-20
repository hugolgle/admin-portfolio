import mysql from 'mysql';

const connectDB = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portfolio",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });

    connection.connect((err) => {
        if (err) {
            console.log("erreur de connexion", err.stack);
            return;
        }
        console.log("Connexion réussie à la bdd !");
    });

    return connection;
};

export default connectDB;