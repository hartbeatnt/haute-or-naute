const UUID = require('uuid/v4');
const Shoe = require('../models/shoe');

module.exports = class ShoeController {
  createShoe (query) {
    const { url, gender, category } = query;
    const shoeId = UUID();
    const shoe = new Shoe({
      shoeId,
      url,
      gender,
      category,
    });
    return shoe.save();
  }

  getShoes(query) {
    return Shoe.find();
  }
}
