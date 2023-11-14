const { db, STATIC_TOKEN } = require("../db");

const index = (req, res) => {
  if("token" in req.cookies && req.cookies.token === `Bearer ${STATIC_TOKEN}`) {
    db.query("SELECT * FROM books;", (err, rst) => {
      if(err) throw err;
      res.render("index", {books: rst});
    });
  } else {
    res.render("login");
  }
}

module.exports = { index };