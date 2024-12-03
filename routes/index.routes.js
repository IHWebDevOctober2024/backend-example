const express = require("express");
const router = express.Router();

const Character = require("../models/Character.model");

router.get("/", (req, res, next) => {
  Character.find()
    .then((response) => res.send(response))
    .catch((error) => console.error(error));
});

module.exports = router;
