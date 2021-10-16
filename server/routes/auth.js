const router = require("express").Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { getData, saveData } = require("../models");

router.post("/register", (req, res) => {
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
    .then((response) => {
      const user = response.filter((user) => user.email === req.body.email);
      if (user.length === 0) res.status(404).send("Invalid email.");
      else {
        if (user[0].password === req.body.password) {
          const token = jwt.sign({ email: user.email }, "basitk41");
          res.send({
            success: true,
            token,
            user: _.pick(user[0], ["name", "email"]),
          });
        } else res.status(400).send("Incorrect password.");
      }
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
