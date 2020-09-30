const User = require('./Services')
const Schema = require('./Schemas')

module.exports = async (app, options) => {


    app.get('/users/:username',
        {},
        User.findOne)

    app.patch('/users/:id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: Schema.update
        },
        User.update)

    app.delete('/users/:id', {
        preValidation: app.AuthHooks.verifyUser,
        schema: ''
    }, User.delete)

}
