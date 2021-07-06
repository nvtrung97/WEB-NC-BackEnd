const db = require('../utils/db.util');

module.exports = {
  findAll() {
    return db('categories');
  },

  save(category) {
    return db('categories')
      .insert(category);
  },

  findById(id) {
    return db('categories')
      .where('_id', id)
      .then((categories) => {
        if (categories.length === 0) {
          return null;
        }
        return categories[0];
      })
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
  },
  //custom
  getMostRegisted(limit) {
    const query =
      `select c._id, c.name, result.count
      from webncdb.categories c,
        (select p.category_id, count(r.product_id) as count
        from webncdb.products p
        left join webncdb.registered_lists r
        on r.product_id = p._id and datediff(now(), r.create_at) < 7
        where p.deleted = 0
        group by p.category_id
        having count > 0)
        as result
      where c._id = result.category_id
      order by result.count desc
      limit ` + limit;
    return db.raw(query).then((results) => results[0])
  }

};
