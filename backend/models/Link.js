const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  email: String,
  title: String,
  url: String,
});

module.exports = mongoose.model("Link", LinkSchema);