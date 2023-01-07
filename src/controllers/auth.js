const { StatusCodes } = require("http-status-codes");

const User = require("../models/User");
const { BadRequestError, UnauthentucatedError } = require("../errors");

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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("wrong email and password!");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthentucatedError("Invalid Credentials!");
  }
  const checkPassword = await user.comparePassword(password);
  if (!checkPassword) {
    throw new UnauthentucatedError("Invalid Credentials!");
  }
  const jwtToken = user.createJWT();
  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      user: { email: user.email, username: user.username, token: jwtToken },
    },
  });
};

module.exports = {
  register,
  login,
};
