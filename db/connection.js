const mysql = require("mysql2");


// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'Mason@89Snowy54909',
    database: 'employee_db'
  });

  module.exports = db;