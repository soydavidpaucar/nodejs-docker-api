const argon2 = require("argon2");
const User = require("../models/user.model");

const signUp = async (req, res) => {
  const { username, password } = req.body;

  const encryptedPassword = await argon2.hash(password);

  const user = new User({ username, password: encryptedPassword });
  try {
    await user.save();
    req.session.user = user;
    res.status(201).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).json({ status: "error", message: "User not found" });
    }
    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) {
      res.status(401).json({ status: "error", message: "Invalid password" });
    }
    req.session.user = user;
    res.status(200).json({ status: "success" });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
