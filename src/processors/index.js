const apiRoutes = async (app, options) => {

    /* Register all processed Api routes, hooks and services */
    app.register(require('./auth'), { prefix: 'scv-v1' })
    app.register(require('./admin'), { prefix: 'scv-v1' })
    app.register(require('./users'), { prefix: 'scv-v1' })
    app.register(require('./images/userUploads'), { prefix: 'scv-v1' })
    app.register(require('./images/postUploads'), { prefix: 'scv-v1' })
    app.register(require('./posts'), { prefix: 'scv-v1' })
    app.register(require('./portfolio'), { prefix: 'scv-v1' })
    app.register(require('./comments/mainComments'), { prefix: 'scv-v1' })
    app.register(require('./comments/subComments'), { prefix: 'scv-v1' })
    app.register(require('./mail'), { prefix: 'scv-v1' })


    app.get('/service-worker.js', async (req, reply) => {
        await reply.sendFile('index.html')
    })

    app.setNotFoundHandler(async (req, reply) => {
        await reply.sendFile('index.html')
    })

    // app.get('*', async (req, reply) => {
    //     await reply.sendFile('index.html')
    // })
}

module.exports = apiRoutes