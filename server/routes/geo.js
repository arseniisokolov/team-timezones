const axios = require("axios");
const express = require("express");
const { GEO_API_URL } = require("../constants");

const routes = express.Router();

const { GEO_API_KEY } = process.env;

routes.route("/geo/").get(function (req, res) {
  axios
    .get(GEO_API_URL, {
      params: {
        access_key: GEO_API_KEY,
        query: req.query.city,
        timezone_module: 1,
      },
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(500).send({ message: "Fetching geo API: " + error.message });
    });
});

module.exports = routes;
