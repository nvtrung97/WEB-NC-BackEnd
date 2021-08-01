const db = require('../utils/db.util');

module.exports = {
  findAll() {
    return db('watch_lists');
  },

  save(watch_list) {
    return db('watch_lists')
      .insert(watch_list);
  },

  findById(id) {
    return db('watch_lists')
      .where('_id', id)
      .then((watch_lists) => {
        if (watch_lists.length === 0) {
          return null;
        }
        return watch_lists[0];
      })
  },

  updateById(id, data) {
    return db('watch_lists')
      .where('_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('watch_lists')
      .where('_id', id)
      .delete();
  },

  //custom
  findAllByUserId(user_id) {
    return db('watch_lists')
    .innerJoin('products', { 'watch_lists.product_id': 'products._id' })
    .innerJoin('users', { 'watch_lists.user_id': 'users._id' })
    .innerJoin('categories', { 'categories._id': 'products.category_id' })
      .where('watch_lists.user_id', user_id)
  },

  getByProductIdAndUserId(productId, userId) {
    return db('watch_lists')
      .where({ 'product_id': productId, 'user_id': userId });
  },
  deleteByProductIdAndUserId(productId, userId) {
    return db('watch_lists')
      .where({ 'product_id': productId, 'user_id': userId })
      .delete();
  }
};
