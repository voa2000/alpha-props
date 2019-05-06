const router = require("express").Router();
const indexCotroller = require("./../controllers/index.controller");

router.route("/").get(indexCotroller);

module.exports = router;
