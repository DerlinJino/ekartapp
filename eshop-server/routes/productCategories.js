const express = require("express");
const productCategorie = express.Router();
const pool = require("../shared/pool");

productCategorie.get("/", (req, res) => {
  pool.query("select * from categories", (error, categories) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = productCategorie;
