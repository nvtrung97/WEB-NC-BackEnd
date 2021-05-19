const mysql = require('mysql');
var conn = mysql.createConnection({
    user: process.env.USERPSQL,
    host: process.env.HOSTSQL,
    database: process.env.DATABASESQL,
    password: process.env.PASSWORDSQL,
    port: process.env.PORTSQL,
    multipleStatements: true
});
module.exports = conn;