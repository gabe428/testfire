var mysql = require('mysql');
var dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
};
var connection = mysql.createConnection(dbConfig);
connection.connect(function onConnect(err) {
    if (err) {
        console.log('error when connecting to db:', err);
        return;
    }
    console.log('database connected successfully');
});
module.exports = connection;
