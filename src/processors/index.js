
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


    // app.get('/service-worker.js', async (req, reply) => {
    //     await reply.sendFile('index.html')
    // })

    app.setNotFoundHandler(async (req, reply) => {
        await reply.sendFile('index.html')
    })


    // app.get('*', async (req, reply) => {
    //     await reply.sendFile('index.html')
    // })
}

module.exports = apiRoutes



// const { app, system, path, fsx } = require('../plugins')

// const { createBundleRenderer } = require('vue-server-renderer')
// const LRU = require('lru-cache')
// const defaultRendererOptions = {
//     cache: new LRU({
//         max: 1000,
//         maxAge: 1000 * 60 * 15,
//         // ...lruCacheOptions,
//     }),
//     runInNewContext: false,
//     inject: false,
//     // directives,
//     // shouldPrefetch: (file, type) => {
//     //     if (config.shouldNotPrefetch.indexOf(file) > -1) return false
//     //     if (type === 'script' || type === 'style') return true
//     // },
//     // shouldPreload: (file, type) => {
//     //     if (config.shouldNotPreload.indexOf(file) > -1) return false
//     //     if (type === 'script' || type === 'style') return true
//     // },
// }

// const resolve = file => path.resolve(__dirname, file)
// const templatePath = resolve('../public/index.ssr.html')

// const template = fsx.readFileSync(templatePath, 'utf-8')
// const serverBundle = require(resolve('../public/vue-ssr-server-bundle.json'))
// const clientManifest = require(resolve('../public/vue-ssr-client-manifest.json'))

// renderer = createBundleRenderer(serverBundle, {
//     ...defaultRendererOptions,
//     template,
//     clientManifest,
// })

// function render (req, reply) {
//     const s = Date.now()

//     // reply.setHeader("Content-Type", "text/html")
//     // reply.setHeader("Server", serverInfo)

//     // const handleError = err => {
//     //     if (err.url)
//     //     {
//     //         reply.redirect(err.url)
//     //     } else if (err.code === 404)
//     //     {
//     //         reply.status(404).send('404 | Page Not Found')
//     //     } else
//     //     {
//     //         // Render Error Page or Redirect
//     //         reply.status(500).send('500 | Internal Server Error')
//     //         console.error(`error during render : ${req.url}`)
//     //         console.error(err.stack)
//     //     }
//     // }

//     const context = {
//         title: 'Vue HN 2.0', // default title
//         url: req.url
//     }
//     renderer.renderToString(context, async (err, html) => {
//         if (err)
//         {
//             console.error('mmmmmmmmmmmmmmmmmm', err)
//             // return handleError(err)
//         }
//         await reply.sendFile(html)
//         // if (!isProd)
//         // {
//         console.log(`whole request: ${Date.now() - s}ms`)
//         // }
//     })
// }

// app.get('*', render)