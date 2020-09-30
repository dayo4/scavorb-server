/* custom errors handler */
// var Ajv = require('ajv')
// var ajv = new Ajv({ allErrors: true, jsonPointers: true })
// require('ajv-errors')(ajv /*, {singleError: true} */)


// const propertiesSchema = {
//     id: { type: 'number' },
//     username: { type: 'string', minLength: 4, pattern: '^([a-zA-Z]{4,})([0-9])*$' },
//     email: {
//         type: 'string',
//         format: 'email'
//         // pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
//         // pattern: '^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$'
//     },
//     password: { type: 'string', minLength: 6 },
//     created_at: { type: 'string' },
//     updated_at: { type: 'string' }
// }

// const bodyJsonSchema = {
//     type: 'object',
//     properties: propertiesSchema,
//     required: ['username', 'email', 'password'],
//     errorMessage: {
//         required: {
//             username: 'username is require',
//             email: 'email is require',
//         },
//         properties: {
//             username: {
//                 minLength: 'username must be minimum of 4 characters',
//                 pattern: 'username must start with minimum of 4 letters. E.g john or johnson98.'
//             }
//         }
//     }
// }
// // ajv.compile(bodyJsonSchema)

module.exports = {
    //     findOne: {
    //         params: {
    //             type: 'object',
    //             properties: {
    //                 username: { type: 'string' },
    //                 // par2: { type: 'number' }
    //             },
    //             required: ['username']
    //         }
    //     },

    //     Login: {
    //         body: {
    //             type: 'object',
    //             properties: {
    //                 email: {
    //                     type: 'string',
    //                     format: 'email'
    //                 },
    //                 password: { type: 'string', minLength: 6 },
    //             },
    //             required: ['email', 'password']
    //         },
    //         response: {
    //             201: {
    //                 type: 'object',
    //                 properties: propertiesSchema
    //             }
    //         }
    //     },

}