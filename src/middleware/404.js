const { StatusCodes } = require("http-status-codes");

const pageNotFound = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).send("<h1>page not found</h1>");
};

module.exports = pageNotFound;
