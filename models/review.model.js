const db = require('../utils/db.util');
module.exports = {
  findAll() {
    return db('reviews');
  },

  save(review) {
    return db('reviews')
      .insert(review);
  },

  findById(id) {
    return db('reviews')
      .where('_id', id)
      .then((reviews) => {
        if (reviews.length === 0) {
          return null;
        }
        return reviews[0];
      })
  },

  updateById(id, data) {
    return db('reviews')
      .where('_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('reviews')
      .where('_id', id)
      .delete();
  },
  //custom
  //review theo product
  getReviewOfProduct(productId, limit, page) {
    return db('reviews')
      .select('reviews.*', 'users.email', 'users.full_name', 'users.avatar_url')
      .innerJoin('users', { 'users._id': 'reviews.user_id' })
      .where('product_id', productId)
      .limit(limit)
      .offset((page - 1) * limit)
  },

  getByProductIdAndUserId(productId, userId) {
    return db('reviews')
      .where({ 'product_id': productId, 'user_id': userId })
  }
};
