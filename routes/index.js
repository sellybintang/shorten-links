const router = require("express").Router();
const shortenLinkRoutes = require("./shortenLinkRoutes");
router.use("/", shortenLinkRoutes);

module.exports = router;
