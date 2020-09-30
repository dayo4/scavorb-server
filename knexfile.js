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
      database: 'scavorb',
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
      database: 'scavorb',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'scavorb_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      // host: process.env.HOST,
      // port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'scavorb',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'scavorb_migrations'
    }
  }

}
