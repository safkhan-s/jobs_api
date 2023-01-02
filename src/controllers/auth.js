const register = async (req, res, next) => {
  res.send("register");
};

const login = async (req, res, next) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
