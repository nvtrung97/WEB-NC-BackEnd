const knex = require('knex')({
  client: 'mysql2',
  connection: {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  },
  pool: { min: 0, max: 50 }
});

module.exports = knex;
