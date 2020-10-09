require('dotenv').config()
const app = require('./fastify')

const WS = require('socket.io')(app.server, {
    path: '/orbServer',
    origins: process.env.NODE_ENV === 'development' ? [ "http://localhost:8080" ] : 'https://www.scavorb.com',
    serveClient: false
})

WS.on('connection', (s) => {
    console.log('connected ')
})

module.exports = WS
