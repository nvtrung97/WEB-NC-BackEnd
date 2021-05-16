const knex = require('knex')({
  client: 'mysql2',
  connection: {
    user: process.env.USER_SQL,
    host: process.env.HOST_SQL,
    database: process.env.DATABASE_SQL,
    password: process.env.PASSWORD_SQL,
    port: process.env.PORT_SQL,
  },
  pool: { min: 0, max: 50 }
});

module.exports = knex;
