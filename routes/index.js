var express = require("express");
var router = express.Router();

var request = require("sync-request");

var lyceeModel = require("../models/lycee");
var formationModel = require("../models/formation");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* Route récupérer API des etabl secondaires */
router.get("/new-lycees", function(req, res, next) {
  var data = request(
    "GET",
    "https://api.opendata.onisep.fr/api/1.0/dataset/57da92de4e062/search"
  );
  var dataParse = JSON.parse(data.body);

  res.json({ result: true, lycee: dataParse.results });
});

router.post("/new-lycees", async function(req, res, next) {
  var newLycee = new lyceeModel({
    lyceeName: req.body.nom,
    lyceeLat: req.body.latitude_y,
    lyceeLon: req.body.longitude_x
  });
  var lyceeSave = await newLycee.save();
  var result = false;

  if (lyceeSave.lyceeName) {
    result = true;
  }
  res.json({ result });
});

/* Route récupérer API des formations en France */
router.get("/new-formation", function(req, res, next) {
  var data = request(
    "GET",
    "https://api.opendata.onisep.fr/api/1.0/dataset/57da8f4c4d1c9/search"
  );
  var dataParse = JSON.parse(data.body);

  res.json({ result: true, formation: dataParse.results });
});

/* Rajouter à l'API des formations initiales en France un code UAI pour relier les formations aux établ secondaires*/

router.put("/new-formation", function(req, res, next) {});

module.exports = router;
