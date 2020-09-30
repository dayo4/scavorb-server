// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      // host: process.env.HOST,
      // port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'crimson',
      // filename: "./crimson.sqlite"
    },
    // useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      // host: process.env.HOST,
      // port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'crimson',
      // filename: "./crimson.sqlite"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'crimson_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      // host: process.env.HOST,
      // port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'crimson',
      // filename: "./crimson.sqlite"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'crimson_migrations'
    }
  }

}
