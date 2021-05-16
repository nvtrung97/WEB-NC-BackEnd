const db = require('../utils/db');

module.exports = {
  save(actor) {
    return db('actor')
      .insert(actor);
  },

  findAll() {
    return db('actor');
  },

  async findById(id) {
    const actors = await db('actor')
      .where('actor_id', id);
    if (actors.length === 0) {
      return null;
    }
    return actors[0];
  },

  updateById(id, data) {
    return db('actor')
      .where('actor_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('actor')
      .where('actor_id', id)
      .delete();
  }
};
