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
      .leftJoin('products', 'reviews.product_id', 'products._id')
      .limit(limit)
      .offset((page - 1) * limit)
  }
};
