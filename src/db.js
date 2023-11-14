const mysql = require("mysql");

const STATIC_TOKEN = "p@+)2{O:?L)cef1czzrP#;japGl`Ea";

const db = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "paraiba",
  database : "library"
});

db.connect();
console.log("Conectado ao banco de dados");

module.exports = { db, STATIC_TOKEN};