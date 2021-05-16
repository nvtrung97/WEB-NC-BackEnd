const db = require('../utils/database.util');

module.exports = {

  save(user) {
    return db('users').insert(user);
  },

  findAll() {
    return db('users');
  },

  async findById(id) {
    const users = await db('users').where('_id', id);
    if (users.length === 0) {
      return null;
    }
    return users[0];
  },

  async findByEmail(email) {
    const users = await db('users').where('email', email);
    if (users.length === 0) {
      return null;
    }
    return users[0];
  },

  updateById(id, data) {
    return db('film')
      .where('film_id', id)
      .update(data);
  },

  deleteById(id) {
    return db('film')
      .where('film_id', id)
      .delete();
  },

  patchRFToken(id, rfToken) {
    return db('users').where('id', id).update('rfToken', rfToken);
  },

  async isValidRFToken(id, rfToken) {
    const list = await db('users').where('id', id).andWhere('rfToken', rfToken);
    if (list.length > 0) {
      return true;
    }

    return false;
  }
};
