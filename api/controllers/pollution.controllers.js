const db = require("../models");
const Pollution = db.pollutions;

exports.get = (req, res) => {
  Pollution.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};
