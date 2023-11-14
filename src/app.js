const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/../public")));
app.set("views", path.join(__dirname, "../public"));
app.set("view engine", "ejs");

app.use("/", require("./views/index.view"));
app.use("/", require("./views/auth.view"));
app.use("/books", require("./views/books.view"));

module.exports = app;