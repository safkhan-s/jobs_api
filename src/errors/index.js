const NotFoundError = require("./not-found");
const CustomApiError = require("./custom-api");
const BadRequestError = require("./bad-request");
const UnauthentucatedError = require("./unauthenticated");

module.exports = {
  CustomApiError,
  BadRequestError,
  UnauthentucatedError,
  NotFoundError,
};
