const db = require('../utils/db.util');
module.exports = {
  save(entity) {
    return db('videos')
      .insert(entity);
  }
}