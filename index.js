const express = require("express");

const app = express();
const cors = require("cors");
// const database = require("./config/config");
// database();
const router = require("./routes/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3014;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(router);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
