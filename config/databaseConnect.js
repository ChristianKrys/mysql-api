
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.ENV_MYSQL_HOST,
    user: process.env.ENV_MYSQL_USER,
    password: process.env.ENV_MYSQL_PASSWORD,
    database: process.env.ENV_MYSQL_DATABASE,
    // port: process.env.ENV_MYSQL_PORT,
});

connection.connect((error) => {
    if( error ) { 
        console.log(error);
        throw new Error(error);
    }
})

module.exports = connection;








