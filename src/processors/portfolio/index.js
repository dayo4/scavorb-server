
const Portfolio = require('./Services')
const Validation = require('./Schemas')
module.exports = async (app, options) => {


    app.post('/portfolio/new/:user_id', {
        preValidation: app.AuthHooks.verifyUser,
        preHandler: Validation.create
    }, Portfolio.create)

    app.post('/portfolio/:user_id', { schema: '' }, Portfolio.findUserProjects)

    app.get('/portfolio/:project_id',
        {
            // preValidation: app.AuthHooks.verifyUser,
            schema: '',
        },
        Portfolio.findOne)

    app.patch('/portfolio/:user_id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: Validation.update
        },
        Portfolio.update)

    app.delete('/portfolio/:user_id/:project_id', {
        preValidation: app.AuthHooks.verifyUser,
        schema: ''
    }, Portfolio.delete)

}
