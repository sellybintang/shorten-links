const shortid = require("shortid");
const { shorten_links } = require("../models");

exports.newShortLink = async (req, res) => {
  try {
    const { codeLink, originalLink, shortenLink } = req.body;
    const shortId = shortid.generate();
    console.log(shortId);
    const ngrokUrl = "https://a2cc-118-99-83-54.ngrok-free.app";
    const local = "http://localhost:3014/";
    const link = await shorten_links.create({
      codeLink: codeLink,
      originalLink: originalLink,
      shortenLink: `${ngrokUrl}/${shortId}`,
    });

    res.status(200).json({
      status: "200",
      message: "successfully created a new shorten link",
      link,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};

exports.showShortenLink = async (req, res) => {
  try {
    const id = req.params.shortenLink;
    const shortLink = await shorten_links.findOne({ shortenLink: id });
    console.log(shortLink.originalLink);

    res.redirect(shortLink.originalLink);
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};
