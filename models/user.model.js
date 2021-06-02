const db = require('../utils/db.util');
module.exports = {

    save(user) {
        return db('users')
            .insert(user);
    },

    findAll() {
        return db('users');
    },

    findById(id) {
        return db('users')
            .where('_id', id)
            .then((users) => {
                if (users.length === 0) {
                    return null;
                }
                return users[0];
            })
    },

    findByEmail(email) {
        return db('users').where('email', email)
            .then((users) => {
                return users;
            });
    },

    updateById(id, data) {
        return db('users')
            .where('_id', id)
            .update(data);
    },

    deleteById(id) {
        return db('users')
            .where('_id', id)
            .delete();
    },

    updateByEmail(entity, email) {
        return db('users').where('email', '=', email)
            .returning('email')
            .update(entity)
    },

    isValidRFToken: async (user_id, rf_token) => {
        return db('users')
            .where('_id', user_id)
            .andWhere('rf_token', rf_token)
            .then((response) => {
                if (response.length == 0) return false;
                return true;
            });
    },

}
