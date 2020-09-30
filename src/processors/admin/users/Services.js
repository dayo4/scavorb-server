const { knex, path, fsx, bcrypt, hlp } = require('../../../plugins')

module.exports = {
    async findAll (request) {
        const query = JSON.parse(request.body.query)
        const filter = query.filter
        const limit = query.limit
        const offset = query.offset
        const sort = query.sort

        try
        {
            const users = await knex.select('id', 'username', 'profile_image', 'first_name', 'last_name', 'active').from('users').where(filter).andWhereNot('priv', 10).orderBy(...sort).limit(limit).offset(offset)
            const usersCount = await knex('users').where(filter).count()

            return { users, count: usersCount[ 0 ][ "count(*)" ] }
        } catch (e)
        {
            hlp.error(e)
        }
    },

    async findOne (request) {
        const user_id = request.params.user_id
        try
        {
            const user = await knex.select('id', 'priv', 'username', 'status', 'about', 'profile_image', 'first_name', 'last_name', 'active').from('users').where('id', user_id).first()
            const accountHistory = await knex('accounts_status').where({ user_id }).select()

            return { ...user, history: accountHistory }
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async changeStatus (request) {
        const { user_id, action, actor_id, reason } = request.body
        try
        {
            const user = await knex.select('blacklisted', 'active').from('users').where('id', user_id).first()
            if (user)
            {
                if (action === 'Activate')
                    return update({ active: true }, action)
                else if (action === 'Deactivate')
                    return update({ active: false }, action)
                else if (action === 'Blacklist')
                    /* Authomatically deactivate a blacklisted account. */
                    return update({ blacklisted: true, active: false }, action)
                else if (action === 'Unblacklist')
                    return update({ blacklisted: false }, action)
                else
                    hlp.error('invalid parameters!', 403)

                async function update (userUpdate) {
                    try
                    {
                        await knex('users').where('id', user_id).update(userUpdate)
                        await knex('accounts_status').insert({ user_id, type: action, reason, actor_id, created_at: new Date() })
                        return "Account status updated"
                    }
                    catch (e)
                    {
                        hlp.error(e)
                    }
                }
            } else { hlp.error('User not found!') }
        }
        catch (e) { hlp.error(e) }
    },

    async delete (request) {
        const user_id = request.params.user_id
        try
        {
            const deleted = await knex('users').where('id', user_id).del()
            if (deleted)
            {
                /*also delete all users images uploaded to directories */
                const url = path.join(__dirname, '../../..', 'uploads/images/users/' + user_id)
                await fsx.remove(url)
                return "User's Account has been deleted."
            }
            else
                hlp.error('unable to complete request, User already deleted or not found.')
        }
        catch (e) { hlp.error(e) }
    }

}
