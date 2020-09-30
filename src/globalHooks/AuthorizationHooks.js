const jwt = require('jsonwebtoken')
const fp = require("fastify-plugin")
const { knex, hlp } = require('../plugins')


const AuthorizationHooks = async (app, options = {}) => {

    /* Enclose all hooks in a single object for easy access anywhere */
    const AuthHooks = {

        /* for loggedIn user access verification */
        // verifyUser (request, reply, done) {

        //     const authHeader = request.headers.authorization

        //     if (authHeader)
        //     {
        //         const token = authHeader.split(' ')[ 1 ]
        //         jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        //             if (err)
        //                 if (err.message === 'jwt expired')
        //                     reply.status(401).send('Re-login!') /* this message is useful at frontend! */
        //                 else
        //                     reply.status(401).send('Access verification failed!')
        //             else
        //                 console.log(user)
        //             done()
        //         })
        //     }
        //     else
        //         reply.status(401).send('Unauthorized!')

        //     return reply
        // },

        verifyUser (request, reply, done) {
            const toVerify = request.verify /* numbers[] */

            const authHeader = request.headers.authorization
            if (authHeader)
            {
                const token = authHeader.split(' ')[ 1 ]
                jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
                    if (err)
                    {
                        if (err.message === 'jwt expired')
                            reply.status(401).send('Re-login!') /* this message is useful at frontend! */
                        else
                            reply.status(401).send('401')
                    }
                    else
                    {
                        if (toVerify)
                        {
                            // const dbUser = await knex('priv').where('user_id', user.data.id).select('level').first()
                            if (toVerify.includes(user.data.pr))
                            {
                                console.log(user.data)
                                done()
                            }
                            else
                                reply.status(401).send('401')
                        } else
                        {
                            done()
                        }
                    }
                })
            }
            else
                reply.status(401).send('Unauthorized!')

            return reply
        }
    }

    //decorate the hooks as plugin
    app.decorate('AuthHooks', AuthHooks)
}

module.exports = fp(AuthorizationHooks)
