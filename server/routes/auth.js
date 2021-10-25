const router = require("express").Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { getData, saveData } = require("../models");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.id = await bcrypt.hash(req.body.email, salt);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  getData("user")
    .then((response) => {
      const user = response.filter((user) => user.email === req.body.email);
      if (user.length !== 0) res.status(400).send("Email exists.");
      else {
        response.push(req.body);
        saveData("user", response)
          .then(() =>
            res.send({
              success: true,
              message: "Registered Successfully.",
              user: req.body,
            })
          )
          .catch((err) => res.status(500).send(err));
      }
    })
    .catch((err) => res.status(500).send(err));
});
router.post("/login", (req, res) => {
  getData("user")
    .then(async (response) => {
      const user = response.filter((user) => user.email === req.body.email);
      if (user.length === 0) res.status(400).send("Invalid email.");
      else {
        if (await bcrypt.compare(req.body.password, user[0].password)) {
          const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            process.env.jwtPrivateKey
          );
          res.send({
            success: true,
            token,
            user: _.pick(user[0], ["id", "name", "email"]),
          });
        } else res.status(400).send("Incorrect password.");
      }
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
