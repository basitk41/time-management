const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied. Token required.");
  try {
    const decode = jwt.verify(token, "basitk41");
    req.email = decode;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = auth;
