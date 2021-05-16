const db = require('../utils/db');

module.exports = {
  save(film) {
    return db('film')
      .insert(film);
  },

  findAll() {
    return db('film');
  },

  async findById(id) {
    const films = await db('film')
      .where('film_id', id);
    if (films.length === 0) {
      return null;
    }
    return films[0];
  },

  updateById(id, data) {
    return db('film')
      .where('film_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('film')
      .where('film_id', id)
      .delete();
  }
};
