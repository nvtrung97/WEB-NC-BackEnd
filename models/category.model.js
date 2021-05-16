const db = require('../utils/db');

module.exports = {
  save(category) {
    return db('category')
      .insert(category);
  },

  findAll() {
    return db('category');
  },

  async findById(id) {
    const categories = await db('category')
      .where('category_id', id);
    if (categories.length === 0) {
      return null;
    }
    return categories[0];
  },

  updateById(id, data) {
    return db('category')
      .where('category_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('category')
      .where('category_id', id)
      .delete();
  }
};
