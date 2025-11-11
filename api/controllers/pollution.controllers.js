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

exports.getById = (req, res) => {
  const id = req.params.id;

  Pollution.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pollution with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

exports.create = (req, res) => {
  console.log("Request body:", req.body);
  const pollution = {
    titre: req.body.titre,
    description: req.body.description,
    date_observation: req.body.date_observation,
    type_pollution: req.body.type_pollution,
    lieu: req.body.lieu,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    photo_url: req.body.photo_url,
  };

  Pollution.create(pollution)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pollution.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pollution was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update Pollution with id=${id}. Maybe Pollution was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pollution.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pollution was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Pollution with id=${id}. Maybe Pollution was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};
