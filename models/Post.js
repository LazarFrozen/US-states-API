const { url } = require("inspector");
const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  abbreviation: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  admission: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
