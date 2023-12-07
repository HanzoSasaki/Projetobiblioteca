const db = require("../db");

const add = (req, res) => {
  const { TITULO, AUTOR, GENERO, EDITORA, ANO} = req.body;
  db.query("INSERT INTO livros (TITULO, AUTOR, GENERO, EDITORA, ANO) VALUES (?, ?, ?, ?, ?)", [TITULO, AUTOR, GENERO, EDITORA, ANO], (err, rst) => {
    if(err) throw err;
  });
}

const remove = (req, res) => {
  const { TITULO, AUTOR, EDITORA} = req.body;
  db.query("DELETE FROM livros WHERE TITULO=? AND AUTOR=? AND EDITORA=? LIMIT 1;", [TITULO, AUTOR, EDITORA], (err, rst) => {
    if(err) throw err;
  });
}

module.exports = { add, remove };