const mysql = require('mysql2'); 
var fs = require("fs");
require('dotenv').config()

const {DB_HOST, DB_PORT,DB_USER, DB_PASS} = process.env

function getConnection(){
  const connection = mysql.createConnection({
    host: "bcb2s6wnfopt5tajnnj0-mysql.services.clever-cloud.com", 
    user: "bcb2s6wnfopt5tajnnj0ueazzskork5scccr",
    port: "22908",
    password: "HuVBCxZrhZPcYzluAdOc",
    database: "API",
    dateStrings: true,
  });

  return connection;
}

module.exports = {getConnection};
