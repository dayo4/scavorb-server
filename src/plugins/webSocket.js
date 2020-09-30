const app = require('./fastify')

const WS = require('socket.io')(app.server, {
    path: '/orbServer',
    origins: ["http://localhost:8080"],
    serveClient: false
})

WS.on('connection', (s) => {
    console.log('connected ')
})

module.exports = WS
