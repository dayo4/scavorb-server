const jwt = require('jsonwebtoken')
const fp = require("fastify-plugin")

const AuthorizationHooks = async (app, options = {}) => {

    /* Enclose all hooks in a single object for easy access anywhere */
    const AuthHooks = {

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
                            if (toVerify.includes(user.data.pr))
                            {
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
