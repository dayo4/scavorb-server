// async function rewriteUrls (app, urls/* string[] */) {
//     urls.forEach(url => {
//         app.get('/' + url, async (req, reply) => {
//             await reply.sendFile('index.html')
//         })
//         app.get('/' + url + '/*', async (req, reply) => {
//             await reply.sendFile('index.html')
//         })
//     })
// }

const apiRoutes = async (app, options) => {
    // await rewriteUrls(app, [ 'profile', 'posts', 'compose', 'about', 'manage-settings', 'admin-dashboard' ])

    /* Register all processed Api routes, hooks and services */
    app.register(require('./auth')/* ,{ prefix: '' } */)
    app.register(require('./admin'))
    app.register(require('./users'))
    app.register(require('./images/userUploads'))
    app.register(require('./images/postUploads'))
    // app.register(require('./priviledges'))
    app.register(require('./posts'))
    app.register(require('./portfolio'))
    app.register(require('./comments/mainComments'))
    app.register(require('./comments/subComments'))
    app.register(require('./mail'))

    // app.get('*', async (req, reply) => {
    //     await reply.sendFile('index.html')
    // })

    app.setNotFoundHandler(async (req, reply) => {
        await reply.sendFile('index.html')
    })
}

module.exports = apiRoutes