
module.exports = async (app, options) => {

    app.register(require('./users'))
    app.register(require('./system'))

}