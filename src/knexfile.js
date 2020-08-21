// Update with your config settings.
const { password } = require('./.env')

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphql_db_test',
      user:     'root',
      password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
