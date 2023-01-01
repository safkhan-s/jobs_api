const { StatusCodes } = require("http-status-codes");

const CustomApiError = require("./custom-api");

class UnauthentucatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthentucatedError;
