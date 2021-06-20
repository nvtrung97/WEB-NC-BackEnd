const db = require('../utils/db.util');

module.exports = {
  findAll() {
    return db('registered_lists');
  },

  save(registered_list) {
    return db('registered_lists')
      .insert(registered_list);
  },

  findById(id) {
    return db('registered_lists')
      .where('_id', id)
      .then((registered_lists) => {
        if (registered_lists.length === 0) {
          return null;
        }
        return registered_lists[0];
      })
  },

  updateById(id, data) {
    return db('registered_lists')
      .where('_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('registered_lists')
      .where('_id', id)
      .delete();
  },

  //custom
  findAllByUserId(user_id) {
    return db('registered_lists')
      .where('user_id', user_id)
  }
};
