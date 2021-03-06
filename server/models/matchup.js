const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchupSchema = new Schema({
  matchupId: String,
  hauteUrl: String,
  nauteUrl: String,
  hauteId: String,
  nauteId: String,
  userId: String,
});

const MatchupModel = mongoose.model('MatchupModel', MatchupSchema);

module.exports = MatchupModel;