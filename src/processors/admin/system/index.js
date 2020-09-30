const System = require('./Services')

module.exports = async (app, options) => {

    app.patch('/admEP/settings', {
        preValidation: [ /* (req, reply, done) =>
        { req.verify = [ 'admin', 'editor' ]; done() } */app.AuthHooks.verifyUser || app.AuthHooks.verifyUser ]
    }, System.updateSettings)

}
