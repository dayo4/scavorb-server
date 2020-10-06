const { knex, bcrypt, hlp } = require('../../../plugins')


module.exports = {

    async register () {
        const data = { username: 'dayo', email: 'dayo4@live.com' }

        try
        {
            const hashedPassword = await bcrypt.hash('scav03212', 12)

            const adjustedData = {
                ...data,
                password: hashedPassword,
                priv: 10,
                profile_image: '1.jpg',
                first_name: 'Adedayo',
                last_name: 'Adeniyi',
                active: true,
                verified: true,
                about: `I am a fullstack web developer who loves exploring deeper the nature of things and experimenting with different strategies. I enjoy engaging in intuitive conversations and visualization about the abstract design of nature and desire driving the architecture of things towards precision.`,
                status: "I'm available. Feel free to message me."
            }

            return await knex('users').insert(adjustedData)
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
