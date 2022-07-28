const protect = async (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ status: "error", message: "Unauthorized" });
  }

  req.user = user;

  return next();
};

module.exports = protect;
