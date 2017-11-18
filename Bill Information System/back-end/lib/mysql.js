'use strict'

const mysql  = require('mysql');

module.exports = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "angel123",
    database : "billinformationsystem"
});
