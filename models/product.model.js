const db = require('../utils/db.util');
const mysql = require('../utils/mysql.util');
module.exports = {
  save(product) {
    return db('products')
      .insert(product);
  },

  findAll() {
    return db('products');
  },

  async findById(id) {
    const products = await db('products')
      .where('_id', id);
    if (products.length === 0) {
      return null;
    }
    return products[0];
  },

  updateById(id, data) {
    return db('products')
      .where('_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('products')
      .where('_id', id)
      .delete();
  },
  //top product hot của tuần
  getHighlightOfWeek(limit) {
    const query =
      `select p._id, count(r.product_id) as count, p.name, p.user_id, p.category_id, p.url_image
      from webncdb.products p
      left join webncdb.registered_lists r
      on r.product_id = p._id and datediff(now(), r.create_at) < 7
      group by p._id
      having count > 0
      order by count desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },
  //top product view cao
  getMostOfView(limit) {
    const query =
      `select p._id, p.name, p.user_id, p.category_id, p.url_image, p.number_students as number_views
      from webncdb.products p
      order by number_views desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },
  getLastestProduct(limit) {
    const query =
      `select p._id, p.name, p.user_id, p.category_id, p.url_image, p.create_at
      from webncdb.products p
      order by p.create_at desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  }
};
