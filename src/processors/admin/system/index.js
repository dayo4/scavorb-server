const System = require('./Services')

module.exports = async (app, options) => {

    app.patch('/admEP/settings', {
        preValidation: [ app.AuthHooks.verifyUser || app.AuthHooks.verifyUser ]
    }, System.updateSettings)

}
