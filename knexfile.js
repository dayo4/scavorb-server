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
      database: process.env.DB_NAME,
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
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.DB_NAME + '_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      // host: process.env.HOST,
      // port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.DB_NAME + '_migrations'
    }
  }

}
