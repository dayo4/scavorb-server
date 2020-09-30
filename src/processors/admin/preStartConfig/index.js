const { fsx, path, knex, hlp } = require('../../../plugins')
const UserZero = require('./UserZero')
const Settings = require('./Settings')

module.exports = {

    async init () {
        try
        {
            const config = await fsx.readJSON(path.join(__dirname, 'conf.json'))
            if (config.initialized === true)
                return true
            else
            {
                try
                {
                    const initialized = await Promise.all([ UserZero.register(), Settings.createTable() ])
                    if (initialized)
                        return await fsx.writeJson(path.join(__dirname, 'conf.json'), { initialized: true })
                } catch (e)
                {
                    hlp.error(e)
                }
            }
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async getSettings () {
        try
        {
            return await knex.select().from('system_settings').first()
        }
        catch (e)
        {
            hlp.error(e)
        }
    }

}
