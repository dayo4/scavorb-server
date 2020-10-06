
const Post = require('./Services')
const Validation = require('./Schemas')
module.exports = async (app, options) => {


    app.post('/posts/new/:user_id', {
        preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ],
        preHandler: Validation.create
    }, Post.create)

    app.get('/posts/allPosts/:query', {}, Post.findAll)
    app.get('/posts/users/:user_id/:query', {}, Post.findUserPosts)
    app.post('/posts/users/:user_id', { preValidation: app.AuthHooks.verifyUser }, Post.findSettingsPost)

    app.get('/posts/:slug/:preview', {}, Post.findOne)

    app.patch('/posts/:user_id',
        {
            preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ],
            preHandler: Validation.update
        },
        Post.update)

    app.delete('/posts/:user_id', {
        preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ],
    }, Post.delete)

}
