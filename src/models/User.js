const mongoose = require("mongoose");

const passCrypt = require("../helpers/password-crypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "you must provide username"],
  },
  password: {
    type: String,
    required: [true, "you must provide password"],
    minlength: 8,
  },
  email: {
    type: String,
    required: [true, "you must provide Email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await passCrypt(this.password);
});

module.exports = mongoose.model("User", UserSchema);
