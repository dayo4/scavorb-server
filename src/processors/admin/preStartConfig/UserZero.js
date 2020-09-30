const { knex, bcrypt, hlp } = require('../../../plugins')


module.exports = {

    async register () {
        const data = { username: 'dayo', email: 'dayo@dayo.com' }
        // const mediaBaseUrl = '//' + request.hostname + '/image/'

        try
        {
            const hashedPassword = await bcrypt.hash('12345678', 10)

            const adjustedData = {
                ...data,
                password: hashedPassword,
                priv: 10,
                profile_image: '1.jpg',
                first_name: 'Adedayo',
                last_name: 'Adeniyi',
                active: true,
                verified: true,
                about: 'I am a fullstack web developer',
                status: "I'm available. Feel free to message me."
            }

            const id = await knex('users').insert(adjustedData)
            // const priv = await knex('priv').insert({ user_id: id, level: 10 })
            return id
        }
        catch (e)
        {
            if (e.sqlMessage)
                if (e.sqlMessage.indexOf('username_unique') !== -1)
                {
                    hlp.error("This username is already taken.")
                } else if (e.sqlMessage.indexOf('email_unique') !== -1)
                {
                    hlp.error("This email is already taken.")
                }
                else
                    hlp.error(e)
            else
                hlp.error(e)
        }

    }
}
