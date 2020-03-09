var mongoose = require("mongoose");

var lyceeSchema = mongoose.Schema({
  lyceeName: String,
  lyceeLat: Number,
  lyceeLong: Number
});

var lyceeModel = mongoose.model("lycee", lyceeSchema);

module.exports = lyceeModel;
