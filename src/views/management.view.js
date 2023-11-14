const { Router } = require("express");
const { add, remove } = require("../controllers/management.controller");

const router = Router();
router.post("/add/:book", add);
router.delete("/remove/:book", remove);

module.exports = router;