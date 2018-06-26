const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: String,
  name: String,
});

const UserModel = mongoose.model('UserModel', UserSchema );

module.exports = UserModel;