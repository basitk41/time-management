const jwt = require("jsonwebtoken");
const address = require("address");
const os = require("os");

const auth = (req, res, next) => {
  console.log("IP", address.ip());
  console.log("OS", os.type());
  address.mac((err, addr) => {
    console.log("MAC", addr);
    console.log("MAC", "f4:0f:24:11:1a:c0");
  });
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied. Token required.");
  try {
    const decode = jwt.verify(token, process.env.jwtPrivateKey);
    console.log("middleware", decode);
    req.email = decode.email;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = auth;
