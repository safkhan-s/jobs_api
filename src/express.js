const express = require("express");
require("express-async-errors");

const app = express();

app.use(express.json());

// NOTE: Routes order matters
app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
});

module.exports = app;
