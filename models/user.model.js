const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
