const { WS } = require('../../../../plugins')
const Comments = require('./Services')
const SOCKET = WS.of((/^\/subComments\/fetch-\d+$/))

SOCKET.on('connect', (socket) => {
    let userExist = false
    let room_id
    SOCKET.use((socket, next) => {
        next()
    })

    socket.on('fetch', (eventData) => {
        const data = JSON.parse(eventData)
        room_id = data.comment_id
        if (!userExist)
        {
            socket.join('subComm-' + room_id)
            userExist = true
        }
        console.log('All sub-rooms ', Object.keys(socket.rooms))
        Comments.findComments(socket, data)
    })

    socket.on('newComment', () => {
        SOCKET.to('subComm-' + room_id).emit('serverUpdated')
    })

})
