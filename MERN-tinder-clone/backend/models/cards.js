const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("cards", cardSchema);
