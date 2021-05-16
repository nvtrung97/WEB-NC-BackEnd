const db = require('../utils/db');

module.exports = {
  save(country) {
    return db('country')
      .insert(country);
  },

  findAll() {
    return db('country');
  },

  async findById(id) {
    const contries = await db('country')
      .where('country_id', id);
    if (contries.length === 0) {
      return null;
    }
    return contries[0];
  },

  updateById(id, data) {
    return db('country')
      .where('country_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('country')
      .where('country_id', id)
      .delete();
  }
};
