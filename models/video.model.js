const db = require('../utils/db.util');
module.exports = {
  save(entity) {
    return db('videos')
      .insert(entity);
  },

  //custom
  findAByUserIdAndProductId(user_id, project_id) {
    const query =
      `select v.*
      from videos v, registered_lists r
      where r.user_id = ${user_id} and r.product_id = ${project_id} and v.product_id = r.product_id`;
    return db.raw(query).then((results) => results[0])
  }
}