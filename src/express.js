const express = require("express");
require("express-async-errors");

const pageNotFound = require("./middleware/404");

const app = express();

app.use(express.json());

// NOTE: Routes order matters
app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
});

app.use(pageNotFound);

module.exports = app;
