// const fastifyPlugin = require('fastify-plugin')
require('dotenv').config()
// const knexConnector = async (app, options = {}) => {
const knex = require('knex')({
    client: 'mysql',
    connection: {
        // host: '127.0.0.1',
        // port: 3000,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'crimson',
        // filename: "./crimson.sqlite"
    },
    // useNullAsDefault: true
})
// app.decorate('knex', db)
// }

module.exports = knex