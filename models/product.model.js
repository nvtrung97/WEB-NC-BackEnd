const db = require('../utils/db.util');
module.exports = {
  findAll() {
    return db('products')
    .select('products.*', 'categories.name as category_name')
    .where('deleted', 0)
    .innerJoin('categories', { 'categories._id': 'products.category_id' }).debug(true);
  },

  save(product) {
    return db('products')
      .insert(product);
  },
  findById(id) {
    return db('products')
      .where({ '_id': id, 'deleted': 0 })
      .then((products) => {
        if (products.length === 0) {
          return null;
        }
        return products[0];
      })
  },
  findDetailById(id) {
    return db('products')
      .select('products.*', 'categories.name as category_name', 'users.email', 'users.full_name')
      .innerJoin('categories', { 'categories._id': 'products.category_id' })
      .innerJoin('users', { 'users._id': 'products.user_id' })
      .where({ 'products._id': id, 'products.deleted': 0 }).debug(true)
      .then((products) => {
        if (products.length === 0) {
          return null;
        }
        return products[0];
      })
  },

  findByCategoryId(id) {
    return db('products')
      .where({ 'category_id': id, 'deleted': 0 })
      .then((products) => {
        if (products.length === 0) {
          return null;
        }
        return products[0];
      })
  },
  updateById(id, data) {
    return db('products')
      .where({ '_id': id, 'deleted': 0 })
      .update(data);
  },

  deleteById(id) {
    return db('products')
      .where({ '_id': id, 'deleted': 0 })
      .update('deleted', 1);
  },
  //custom
  //product theo thể loại
  getProductOfCategory(categoryId, limit, page) {
    return db.select('products._id', 'products.name', 'category_id', 'categories.name as category', 'user_id as author_id', 'full_name as author_name', 'number_reviews', 'score', 'url_image')
      .from('products')
      .leftJoin('users', 'products.user_id', 'users._id')
      .leftJoin('categories', 'products.category_id', 'categories._id')
      .where({ 'category_id': categoryId, 'products.deleted': 0, 'users.deleted': 0 })
      .limit(limit)
      .offset((page - 1) * limit)
  },

  countProductOfCategory(categoryId) {
    const query =
      `select count(*) as totalProduct
      from products p
      where p.category_id = ${categoryId} and p.deleted = 0`;
    return db.raw(query).then((results) => results[0][0].totalProduct)
  },

  //top product hot của tuần
  getHighlightOfWeek(limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.user_id as author_id, u.full_name as author_name, p.url_image, count(r.product_id) as count, p.score, p.number_reviews
      from products p
      left join registered_lists r
      on r.product_id = p._id
      left join categories c
      on p.category_id = c._id
      left join users u
      on p.user_id = u._id
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
      `select p._id, p.name, p.category_id, c.name as category, p.user_id as author_id, u.full_name as author_name, p.url_image, p.number_students as number_views, p.score, p.number_reviews
      from products p
      left join categories c
      on p.category_id = c._id
      left join users u
      on p.user_id = u._id
      where p.deleted = 0
      order by number_views desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },

  //top product moi nhat
  getLastestProduct(limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.user_id as author_id, u.full_name as author_name, p.url_image, p.create_at, p.score, p.number_reviews
      from products p
      left join categories c
      on p.category_id = c._id
      left join users u
      on p.user_id = u._id
      where p.deleted = 0
      order by p.create_at desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  },

  //tim kiem product
  searchProduct(keyword, category_id, limit, page, order) {
    const queryName =
      `select p._id, p.name, p.category_id, c.name as category, p.user_id as author_id, u.full_name as author_name, p.url_image, p.score, p.short_description, p.number_reviews
      from products p, categories c, users u
      where ( match(p.name) against('${keyword}') or 
              match(c.name) against('${keyword}' in boolean mode) )
            and p.category_id = c._id and p.deleted = 0 and p.user_id = u._id`;
    var subquery =
      ` order by p.score ${order}
    limit ${limit}
    offset ${(page - 1) * limit} `;
    var query = '';
    if (category_id != 0) {
      query = queryName + ` and p.category_id = ${category_id}` + subquery;
    }
    else {
      query = queryName + subquery;
    }
    console.log(query);
    return db.raw(query).then((results) => results[0])
  },

  countSearchProduct(keyword, category_id) {
    const queryName =
      `select count(p._id) as totalProduct
      from products p, categories c, users u
      where ( match(p.name) against('${keyword}') or 
              match(c.name) against('${keyword}' in boolean mode) )
            and p.category_id = c._id and p.deleted = 0 and p.user_id = u._id`;
    var query = '';
    if (category_id != 0) {
      query = queryName + ` and p.category_id = ${category_id}`;
    }
    else {
      query = queryName;
    }
    return db.raw(query).then((results) => results[0][0].totalProduct)
  },
  //top product theo category
  getMostOfCategory(categoryId, limit) {
    const query =
      `select p._id, p.name, p.category_id, c.name as category, p.user_id as author_id, u.full_name as author_name, p.url_image, p.number_students as number_views, p.score, p.number_reviews
from products p
left join categories c
on p.category_id = ${categoryId} and p.category_id = c._id
left join users u
on p.user_id = u._id
where p.deleted = 0
order by number_views desc
limit ` + limit;
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
  // api cho giao vien
  findAllByUserId(userId) {
    return db('products').where({ 'user_id': userId, 'deleted': 0 });
  },

  updateByIdAndUserId(id, userId, data) {
    return db('products')
      .where({ '_id': id, 'user_id': userId, 'deleted': 0 })
      .update(data);
  },

  deleteByIdAndUserId(id, userId) {
    return db('products')
      .where({ '_id': id, 'user_id': userId, 'deleted': 0 })
      .update('deleted', 1);
  },

  //status 1: chua xong, 0: da xong
  updateStatusFinal(id, userId) {
    return db('products')
      .where({ '_id': id, 'user_id': userId, 'deleted': 0 })
      .update('status', 0);
  }
};

