const mysql = require('mysql');

const con = mysql.createConnection({
    host: '85.10.205.173',
    user: 'veterinaria',
    password: "12345678",
    database: 'veterinarianode'
});

exports.con = con;