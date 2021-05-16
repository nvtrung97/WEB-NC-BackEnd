const db = require('../utils/db');
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
    }
}