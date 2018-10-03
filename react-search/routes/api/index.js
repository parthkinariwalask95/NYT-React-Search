const router = require("express").Router();
const articleRoutes = require("./Article");

router.use("/articles", articleRoutes);

module.exports = router;