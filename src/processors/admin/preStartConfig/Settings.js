const { knex } = require('../../../plugins')

module.exports = {

    async createTable () {
        const data = { allow_new_reg: true }
        try
        {
            const settings = await knex.select().from('system_settings').first()
            if (settings)
                return
            else
                return await knex('system_settings').insert(data)
        }
        catch (e) { hlp.error(e) }
    },
}
