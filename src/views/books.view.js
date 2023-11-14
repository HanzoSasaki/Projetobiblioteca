const { Router } = require("express");
const { getBooks, getGenders } = require("../controllers/books.controller");

const router = Router();
router.get("/", getBooks);
router.get("/genders", getGenders);

module.exports = router;