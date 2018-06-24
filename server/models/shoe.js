const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  shoeId: String,
  url: String,
  gender: String,
  category: String,
});

const ShoeModel = mongoose.model('ShoeModel', ShoeSchema );

module.exports = ShoeModel;