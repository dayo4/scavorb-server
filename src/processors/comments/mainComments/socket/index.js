const { WS, knex } = require('../../../../plugins')
const Comments = require('./Services')

/* WEB SOCKET */
const SOCKET = WS.of((/^\/comments\/fetch-\d+$/))

SOCKET.on('connect', (socket) => {
    let userExist = false
    let room_id
    SOCKET.use((socket, next) => {
        next()
    })

    socket.on('fetch', (eventData) => {
        const data = JSON.parse(eventData)
        room_id = data.post_id
        if (!userExist)
        {
            socket.join('comm-' + room_id)
            userExist = true
        }
        console.log('All rooms ', Object.keys(socket.rooms))
        Comments.findComments(socket, data)
    })

    socket.on('newComment', () => {
        SOCKET.to('comm-' + room_id).emit('serverUpdated')
        WS.of('/posts/mainfeed').to('posts-mainfeed').emit('serverUpdated')
    })
})
