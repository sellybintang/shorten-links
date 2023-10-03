const { newShortLink, showShortenLink } = require("../controller/shortenLink");

const router = require("express").Router();

router.post("/shortenLink", newShortLink);
router.get("/:shortenLink", showShortenLink);

module.exports = router;
