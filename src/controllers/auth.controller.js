const { db, STATIC_TOKEN } = require("../db");
const { randomBytes } = require("crypto");

const login = (req, res) => {
  const { user, password } = req.body;

  db.query("SELECT * FROM admins WHERE user=? AND password=?;", [user, password], (err, rst) => {
    if(err) throw err;

    if(rst[0]) {
      res
      .cookie("token", `Bearer ${STATIC_TOKEN}`, {expires: new Date(Date.now() + 24 * 3600000)})
      .redirect(301, "/");
    } else {
      res.status(401).render("login", {message: "O usuário ou senha estão incorretos."});
    }
  });
}

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).redirect("/");
}

module.exports = { login, logout };