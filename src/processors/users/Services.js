const { knex, path, fsx, bcrypt, hlp } = require('../../plugins')



module.exports = {

    async findOne (request) {
        const Uname = request.params.username
        try
        {
            const fetchedData = await knex
                .select('id', 'profile_image', 'priv', 'cover_image', 'about', 'username', 'first_name', 'last_name', 'status')
                .from('users').where({
                    username: Uname,
                    active: true
                }).first()
            if (fetchedData)
            {
                const data = { id, profile_image, cover_image, about, username, status, first_name, last_name, priv } = fetchedData
                const newData = { id, profile_image, cover_image, about, username, status, first_name, last_name, name: data.first_name + ' ' + data.last_name, pr: data.priv }
                return newData
            } else
            {
                hlp.error('The requested user profile could not be located.', 404)
            }
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async update (request) {
        const id = request.params.id
        const detail = { status, about, first_name, last_name, old_password, new_password, active } = request.body

        try
        {

            const user = await knex('users').where('id', id).select('id', 'password', 'about', 'username', 'first_name', 'last_name', 'status').first()

            if (status)
            {
                const dataToSave = {
                    status
                }
                return updater(dataToSave)
            } else if (first_name && last_name)
            {
                const dataToSave = {
                    first_name,
                    last_name
                }
                return updater(dataToSave)
            } else if (about)
            {
                const dataToSave = {
                    about
                }
                return updater(dataToSave)
            } else if (active === false)
            {
                return updater({ active: false }, false)
            } else if (old_password && new_password)
            {

                const matched = await bcrypt.compare(old_password, user.password)
                if (matched)
                {
                    const hash = await bcrypt.hash(new_password, 10)
                    const dataToSave = {
                        password: hash
                    }
                    return updater(dataToSave, returnData = false)
                } else
                {
                    hlp.error("You have entered an incorrect password. Check and try again.", 403)
                }
            }

            async function updater (dataToSave, returnData = true) {
                try
                {
                    const updated = await knex('users').where('id', id).update(dataToSave)
                    if (updated)
                    {
                        if (returnData)
                        {
                            return {
                                user: dataToSave
                            }
                        } else
                        {
                            return {
                                message: "success"
                            }
                        }

                    }
                }
                catch (e)
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

    async delete (request) {
        const id = request.params.id
        try
        {
            const deleted = await knex('users').where('id', id).del()
            if (deleted)
            {
                /*also delete all users images uploaded to directories */
                const url = path.join(__dirname, '../..', 'uploads/images/users/' + id)
                return fsx.remove(url).then(() => {
                    return "Your Account has been deleted."
                }).catch(e => {
                    hlp.error(e)
                })
            }
        }
        catch (e) { hlp.error(e, 401) }
    }

}
