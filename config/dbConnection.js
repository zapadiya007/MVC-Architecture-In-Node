const mysql = require('mysql2');
const envFile = require('dotenv');

envFile.config({ path: './config/.env' });

const connection = mysql.createConnection({
    host: process.env.dbHost || 'localhost',
    port: process.env.dbPort || '',
    user: process.env.dbUser || 'root',
    password: process.env.dbPWD || 'xyz',
    database: process.env.dbDatabase || 'xyz',
    dateStrings: true
})


const dbWithPromise = connection.promise();
const dbWithoutPromise = connection;


module.exports = {
    dbWithPromise,
    dbWithoutPromise
}