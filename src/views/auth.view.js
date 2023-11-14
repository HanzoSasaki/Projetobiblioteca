const { Router } = require("express");
const { login, logout } = require("../controllers/auth.controller");

const router = Router();
router.post("/", login);
router.get("/logout", logout);

module.exports = router;