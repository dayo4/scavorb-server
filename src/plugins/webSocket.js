require('dotenv').config()
const app = require('./fastify')

const WS = require('socket.io')(app.server, {
    path: '/orbServer',
    serveClient: false,
    // origins: process.env.NODE_ENV === 'development' ? [ "http://localhost:8080" ] : 'https://scavorb.com',
    // methods: [ "GET" ],

    cors: {
        origins: process.env.NODE_ENV === 'development' ? [ "http://localhost:8080" ] : 'https://scavorb.com',
        methods: [ "GET" ],
    },
})

WS.on('connection', (s) => {
    console.log('connected ')
})

// WS.use((socket, next) => {
// var handshakeData = socket.request;
// make sure the handshake data looks good
// if error do this:
// const err = new Error("not authorized")
// err.data = { content: "Please retry later" }; 
// next(err);
// else just call next
// next()
// })
module.exports = WS
