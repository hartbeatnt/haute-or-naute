const UUID = require('uuid/v4');
const Matchup = require('../models/matchup');

module.exports = class MatchupController {
  saveMatchup (query) {
    const { userId , hauteUrl, nauteUrl, hauteId, nauteId } = query;
    const matchupId = UUID();
    const matchup = new Matchup({
      matchupId,
      hauteUrl,
      nauteUrl,
      hauteId,
      nauteId,
      userId,
    });
    return matchup.save();
  }

  getUserMatchupHistory(query) {
    const { userId } = query;
    return Matchup.find({ userId });
  }
}
