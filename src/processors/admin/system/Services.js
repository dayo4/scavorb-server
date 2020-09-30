const { knex, path, fsx, hlp } = require('../../../plugins')

module.exports = {

    async updateSettings (request) {
        const data = request.body.settings
        try
        {
            return await knex('system_settings').update(data)
        }
        catch (e) { hlp.error(e) }
    },

}
