module.exports = {
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_IP: process.env.MONGO_IP || "mongodb",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  REDIS_HOST: process.env.REDIS_HOST || "redis",
  SESSION_SECRET: process.env.SESSION_SECRET,
};
