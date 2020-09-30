// const fp = require("fastify-plugin")
const Validator = require('./lib/index')

module.exports = Validator



// const hgvalidator = async (app, options = {}, done) => {

//     const validator = Validator
    // function validate() {
    // return myValidator
    // if (validationSchema)
    // {
    //     if (options)
    //     {
    //         return myValidator.test(validationSchema, options)
    //     }
    // reply.status(415).send({ error: myValidator.errors })
    // reply.status(401).send('Invalid Access Procedure! You may have to login again to verify your pass!')

    // } else
    // {
    //     throw new Error('Validation Schema missing')
    //     // reply.status(401).send({ message: 'You are unauthorized to perform this action!' })
    // }
    // return reply
    // }

    //decorate the hooks as plugin
//     app.decorate('validator', validator)
// }

// module.exports = fp(hgvalidator)
