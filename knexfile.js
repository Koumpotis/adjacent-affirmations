module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/DATABASE NAME',
    debug: true,
    migrations: {
      tableName: 'knex_migrations',
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/DATABASE NAME',
    migrations: {
      tableName: 'knex_migrations',
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      min: 2,
      max: 10,
    }
  },
};
