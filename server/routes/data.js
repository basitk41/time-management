const router = require("express").Router();
const { getData, saveData } = require("../models");

router.get("/", (req, res) => {
  getData("data")
    .then((response) => res.send(response))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req, res) => {
  saveData("data", req.body)
    .then((response) => res.send(response))
    .catch((err) => res.status(500).send(err));
});

router.put("/", (req, res) => {
  const { id, name } = req.body;
  getData("data")
    .then((response) => {
      response[id].name = name;
      saveData("data", response)
        .then((response) => res.send(response))
        .catch((err) => res.status(500).send(err));
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  getData("data")
    .then((response) => {
      const users = response.filter((user, i) => i != id);
      saveData("data", users)
        .then((response) => res.send(response))
        .catch((err) => res.status(500).send(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
