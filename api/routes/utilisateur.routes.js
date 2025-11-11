module.exports = (app) => {
  const utilisateur = require("../controllers/utilisateur.controllers.js");

  var router = require("express").Router();

  router.post("/login", utilisateur.login);
  router.post("/register", utilisateur.register);
  router.get("/", utilisateur.getAll);

  app.use("/api/utilisateur", router);
};
