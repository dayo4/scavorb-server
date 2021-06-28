const Admin = require('./Services')

module.exports = async (app, options) => {


    app.post('/admEP/allUsers', {
        preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ]
    }, Admin.findAll)

    app.get('/admEP/users/:user_id',
        { preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ] },
        Admin.findOne)

    app.patch('/admEP/users/status/', { preValidation: [ (req, reply, done) => { req.verify = [ 9, 10 ]; done() }, app.AuthHooks.verifyUser ] }, Admin.changeStatus)
    app.delete('/admEP/users/delete/:user_id', { preValidation: [ (req, reply, done) => { req.verify = [ 10 ]; done() }, app.AuthHooks.verifyUser ] }, Admin.delete)

}
