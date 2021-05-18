const knex = require('knex')({
  client: 'mysql2',
  connection: {
    user: process.env.USERPSQL,
    host: process.env.HOSTSQL,
    database: process.env.DATABASESQL,
    password: process.env.PASSWORDSQL,
    port: process.env.PORTSQL,
  },
  pool: { min: 0, max: 50 }
});

module.exports = knex;
