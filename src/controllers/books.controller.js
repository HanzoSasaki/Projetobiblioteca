const db = require("../db");

const getBooks = (req, res) => {
  db.query("SELECT * FROM books;", (err, rst) => {
    if(err) throw err;
    res.json(Object.values(JSON.parse(JSON.stringify(rst))));
  });
}

const getGenders = (req, res) => {
  db.query("SELECT gender FROM books;", (err, rst) => {
    if(err) throw err;

    let books = [];
    rst.forEach(i => books.push(i.gender));
    res.json(JSON.parse(JSON.stringify([...new Set(books)])));
  })
}

module.exports = { getBooks, getGenders };