var mysql = require('mysql');
var mariaDBConnInfo = require('./mariaDBConn.json');
var connection = mysql.createConnection({
    host: mariaDBConnInfo.host,
    post: mariaDBConnInfo.post,
    user: mariaDBConnInfo.user,
    password: mariaDBConnInfo.password,
    database: mariaDBConnInfo.database
});
connection.connect();

module.exports = connection;