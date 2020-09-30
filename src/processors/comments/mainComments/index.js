// const { app, knex } = require('../../../plugins')
require('./socket')
const Comments = require('./httpServices')
const Validation = require('../Schemas')


module.exports = async (app, options) => {


    app.post('/comments/new/:user_id/:post_id', {
        preValidation: app.AuthHooks.verifyUser,
        preHandler: Validation.create
    },
        Comments.create)

    /* limit and offset parameters to define fetch quantity.. */
    // app.get('/comments/:post_id/:query', { schema: '' }, Comments.findComments)

    app.get('/comments/:comment_id',
        {
            // preValidation: app.AuthHooks.verifyUser,
            schema: '',
        },
        Comments.findOne)

    app.patch('/comments/:user_id/:comment_id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: Validation.update
        },
        Comments.update)

    app.delete('/comments/:user_id/:comment_id', {
        preValidation: app.AuthHooks.verifyUser,
        schema: ''
    }, Comments.delete)


    /* WEB SOCKET */



}
