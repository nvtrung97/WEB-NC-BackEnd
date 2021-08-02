const db = require('../utils/db.util');
module.exports = {
    findAll() {
        return db('users').where('deleted', 0);
    },

    save(user) {
        return db('users')
            .insert(user);
    },

    findById(id) {
        return db('users')
            .where({ '_id': id, 'deleted': 0 })
            .then((users) => {
                if (users.length === 0) {
                    return null;
                }
                return users[0];
            })
    },
    findByEmailInDB(email) {
        return db('users')
            .where({ 'email': email })
            .then((users) => {
                if (users.length === 0) {
                    return null;
                }
                return users[0];
            })
    },
    findByEmail(email) {
        return db('users').where({ 'email': email, 'deleted': 0 })
            .then((users) => {
                return users;
            });
    },
    findByEmailIgnoreDeleted(email) {
        return db('users').where({ 'email': email})
            .then((users) => {
                return users;
            });
    },
    findByEmailInDB(email) {
        return db('users').where({ 'email': email })
            .then((users) => {
                return users;
            });
    },

    updateById(id, entity) {
        return db('users').where({ '_id': id})
            .returning('email')
            .update(entity)
    },

    updateByEmail(entity, email) {
        return db('users').where({ 'email': email, 'deleted': 0 })
            .returning('email')
            .update(entity)
    },

    deleteById(id) {
        return db('users')
            .where('_id', '=', id)
            .update('deleted', 1);
    },


    isValidRFToken: async (user_id, rf_token) => {
        return db('users')
            .where({ '_id': user_id, 'deleted': 0 })
            .andWhere('rf_token', rf_token)
            .then((response) => {
                if (response.length == 0) return false;
                return true;
            });
    }

}
