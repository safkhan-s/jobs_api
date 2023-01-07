const express = require("express");
require("express-async-errors");

const authRoutes = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");
const pageNotFound = require("./middleware/404");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

app.use(express.json());

// NOTE: Routes order matters
app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobsRoutes);

app.use(pageNotFound);
app.use(errorHandlerMiddleware);

module.exports = app;
