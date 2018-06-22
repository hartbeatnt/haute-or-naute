const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    url: String,
    gender: String,
    category: String,
});

const ShoeModel = mongoose.model('SomeModel', ShoeSchema );

module.exports = ShoeModel;