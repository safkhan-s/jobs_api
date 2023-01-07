const { StatusCodes } = require("http-status-codes");

const User = require("../models/User");

const register = async (req, res, next) => {
  const user = req.body;
  const createUser = await User.create({ ...user });
  const jwtToken = createUser.createJWT();
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      user: { userId: createUser._id, username: createUser.username },
      jwtToken,
    },
  });
};

const login = async (req, res, next) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
