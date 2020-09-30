const Mail = require('./Services')
const Schema = require('./Schemas')

module.exports = async (app, options) => {


    app.post('/mail/send',
        {
            preHandler: Schema.send
        },
        Mail.send)

}
