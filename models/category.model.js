const db = require('../utils/db.util');

module.exports = {
  save(category) {
    return db('categories')
      .insert(category);
  },

  findAll() {
    return db('categories');
  },

  async findById(id) {
    const categories = await db('categories')
      .where('_id', id);
    if (categories.length === 0) {
      return null;
    }
    return categories[0];
  },

  updateById(id, data) {
    return db('categories')
      .where('_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('categories')
      .where('_id', id)
      .delete();
  }
};
