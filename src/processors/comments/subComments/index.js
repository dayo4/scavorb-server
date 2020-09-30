
require('./socket')
const subComments = require('./httpServices')
const Validation = require('../Schemas')

module.exports = async (app, options) => {

    app.post('/subComments/new/:user_id/:comment_id', {
        preValidation: app.AuthHooks.verifyUser,
        preHandler: Validation.create
    }, subComments.create)

    app.get('/subComments/:comment_id',
        {
            // preValidation: app.AuthHooks.verifyUser,
            schema: '',
        },
        subComments.findOne)

    app.patch('/subComments/:user_id/:comment_id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: Validation.update
        },
        subComments.update)

    app.delete('/subComments/:user_id/:comment_id', {
        preValidation: app.AuthHooks.verifyUser,
        schema: ''
    }, subComments.delete)

}
