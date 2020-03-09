var mongoose = require("mongoose");

var formationSchema = mongoose.Schema({
  formationName: String,
  formationLat: Number,
  formationLong: Number
});

var formationModel = mongoose.model("formation", formationSchema);

module.exports = formationModel;
