const { app, system, path, fsx } = require('./plugins')

//environment variables
require('dotenv').config()

//register npm modules/plugins
app.register(require('fastify-helmet'))
app.register(require('fastify-multipart'))
app.register(require('fastify-cors'), {
    origin:
        process.env.NODE_ENV === 'development' ?
            ["http://localhost:8080", "http://127.0.0.1:8080", "http://localhost:4000"] : ""
})


//register global app hooks and plugins
app.register(require('./globalHooks/AuthorizationHooks'), {})

// Declare static routes
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'public')
})
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'uploads/images/users/'), prefix: '/usr/', decorateReply: false
})
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'uploads/images/posts/'), prefix: '/pst/', decorateReply: false
})

//Import all the app's processed Api route functions
app.register(require('./processors'))

//preStartConfig 
const preStartConfig = require('./processors/admin/preStartConfig/')

//Start the server
const start = async () => {
    try {
        // await app.listen(process.env.PORT, process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1')
        await app.listen(process.env.PORT, process.env.HOST)
            .then(() => {
                preStartConfig.init().then(done =>
                    system.settings = preStartConfig.getSettings()
                )
            })
        // app.log.info(`server listening on ${ app.server.address().port }`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()