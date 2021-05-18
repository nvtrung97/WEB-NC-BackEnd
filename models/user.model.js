const db = require('../utils/db.util');
const tbName = 'users';
const idField = "_id";
module.exports = {
    findByUserId: async userId => {
        return db(tbName).where(idField, userId)
            .then((response) => {
                return response;
            });
    },
    updateByUserId: async (entity, userId) => {
        return db(tbName).where(idField, '=', userId)
            .returning([idField])
            .update(entity)
            .then((response) => {
                return response;
            });
    },
    updateByEmail: async (entity, email) => {
        return db(tbName).where('email', '=', email)
            .returning('email')
            .update(entity)
            .then((response) => {
                return response;
            });
    },
    create: async entity => {
        return db(tbName).insert(entity)
            .returning([idField])
            .then((response) => {
                return response;
            });
    },
    findByEmail: async email => {
        return db(tbName).where('email', email)
            .then((response) => {
                return response;
            });
    },
    isValidRFToken: async (user_id, rf_token) => {
        return db(tbName)
            .where('_id', user_id)
            .andWhere('rf_token', rf_token)
            .then((response) => {
                if(response.length == 0) return false;
                return true;
            });
    }
}
