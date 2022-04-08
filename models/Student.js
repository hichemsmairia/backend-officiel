var mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
  StudentId: Number,
  Name: String,
  Email: String,
  Address: String,
});

module.exports = mongoose.model("student", StudentSchema);
