const db = require('../utils/db.util');
module.exports = {
  findAll() {
    return db('products').where('deleted', 0);
  },

  save(product) {
    return db('products')
      .insert(product);
  },

  findById(id) {
    return db('products')
      .where({ _id: id, deleted: 0 })
      .then((products) => {
        if (products.length === 0) {
          return null;
        }
        return products[0];
      })
  },

  updateById(id, data) {
    return db('products')
      .where({ _id: id, deleted: 0 })
      .update(data);
  },

  deleteById(id) {
    return db('products')
      .where({ _id: id, deleted: 0 })
      .update('deleted', 1);
  },
  //custom
  //product theo thể loại
  getProductOfCategory(categoryId, limit, page) {
    return db.select('products._id', 'products.name', 'category_id', 'categories.name as category', 'user_id as author_id', 'full_name as author_name', 'number_reviews', 'url_image')
      .from('products')
      .leftJoin('users', 'products.user_id', 'users._id')
      .leftJoin('categories', 'products.category_id', 'categories._id')
      .where({ 'category_id': categoryId, 'products.deleted': 0, 'users.deleted': 0 })
      .limit(limit)
      .offset((page - 1) * limit)
  },

  //top product hot của tuần
  getHighlightOfWeek(limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, count(r.product_id) as count
      from products p
      left join registered_lists r
      on r.product_id = p._id and datediff(now(), r.create_at) < 7
      left join categories c
      on p.category_id = c._id
      where p.deleted = 0
      group by p._id
      having count > 0
      order by count desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },

  //top product view cao
  getMostOfView(limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, p.number_students as number_views
      from products p
      left join categories c
      on p.category_id = c._id
      where p.deleted = 0
      order by number_views desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },

  //top product moi nhat
  getLastestProduct(limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, p.create_at
      from products p
      left join categories c
      on p.category_id = c._id
      where p.deleted = 0
      order by p.create_at desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },

  //tim kiem product
  searchProduct(keyword, type, limit, page, order) {
    console.log(type);
    const queryName =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, p.score, p.short_description
      from products p, categories c
      where match(p.name) against('${keyword}') and p.category_id = c._id and p.deleted = 0`;
    const queryCatgeory =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, p.score, p.short_description
      from products p, categories c
      where p.category_id = c._id and p.deleted = 0 and match(c.name) against('${keyword}'in boolean mode)`;
    const queryBonus =
      ` order by p.score ${order}
        limit ${limit}
        offset ${(page - 1) * limit} `;
    let query = '';
    if (type == 'category') {
      query = queryCatgeory + queryBonus;
    }
    else {
      query = queryName + queryBonus;
    }
    return db.raw(query).then((results) => results[0])
  },
  //top product theo category
  getMostOfCategory(categoryId, limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.url_image, p.number_students as number_views
from products p
left join categories c
on p.category_id = ${categoryId} and p.category_id = c._id
where p.deleted = 0
order by number_views desc
limit` + limit;
    return db.raw(query).then((results) => results[0])
  },
  //fb api
  getDetailFacebookProduct(id) {
    const query =
      `select p._id, p.name, c.name as category, u.full_name, p.url_image, p.score, p.short_description
from products p
left join categories c
on p.category_id = c._id
left join users u
on p.user_id = u._id
where p.deleted = 0 and p._id = ${id} and u.deleted = 0`;
    return db.raw(query).then((results) => results[0])
  },
};
