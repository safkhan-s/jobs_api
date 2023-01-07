const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { UnauthentucatedError } = require("../errors");

const auth = async (req, res, next) => {
  // NOTE: checks header for authentication token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthentucatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthentucatedError("Authentication Invalid");
  }
};

module.exports = auth;
