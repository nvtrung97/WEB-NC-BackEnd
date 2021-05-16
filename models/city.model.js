const db = require('../utils/db');

module.exports = {
  save(city) {
    return db('city')
      .insert(city);
  },

  findAll() {
    return db('city');
  },

  async findById(id) {
    const cities = await db('city')
      .where('city_id', id);
    if (cities.length === 0) {
      return null;
    }
    return cities[0];
  },

  updateById(id, data) {
    return db('city')
      .where('city_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('city')
      .where('city_id', id)
      .delete();
  }
};
