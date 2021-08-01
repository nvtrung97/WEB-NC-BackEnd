const db = require('../utils/db.util');
module.exports = {
  save(entity) {
    return db('videos')
      .insert(entity);
  },

  //custom
  updateByProductAndUser(user_id, product_id, video_id) {
    const query =
      `update registered_lists set video_pause_id = ${video_id}
      where user_id = ${user_id} and product_id = ${product_id}`;
    return db.raw(query).then((results) => results[0]);
  },

  findByUserIdAndProductId(user_id, product_id) {
    const query =
      `select v.*
      from videos v, registered_lists r
      where r.user_id = ${user_id} and r.product_id = ${product_id} and v.product_id = r.product_id`;
    return db.raw(query).then((results) => results[0]);
  },
  deleteById(id) {
    return db('videos')
      .where('_id', id)
      .delete();
  },
  findPreviewByProductId(product_id) {
    return db('videos')
      .select('name')
      .where('product_id', product_id)
      .limit(5)
  },
  deleteVideo(video_id, product_id, user_id) {
    return db('videos')
      .leftJoin('products', 'products.user_id', user_id)
      .where({ 'videos._id': video_id, 'videos.product_id': product_id, 'videos.product_id': 'products._id' })
      .delete();
  },
}