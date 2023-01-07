const { StatusCodes } = require("http-status-codes");

const User = require("../models/User");
const passCrypt = require("../helpers/password-crypt");

const register = async (req, res, next) => {
  const user = req.body;
  const createUser = await User.create({ ...user });

  res
    .status(StatusCodes.CREATED)
    .json({
      status: "success",
      data: { username: createUser.username, email: createUser.email },
    });
};

const login = async (req, res, next) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
