// const { isEmptyObject } = require('../utils/functions')
// const App = require('../../services/index')
// const { knex } = require('../../plugins/knexDB')


module.exports = {
    // async findAll(reply) {
    //     knex.select().from('users')
    //         .then(data => reply.send(data))
    // },

    // async findOne(request, reply) {
    //     const id = request.params.username
    //     knex.select().from('users').where('username', id).first()
    //         .then(data => {
    //             if (data)
    //             {
    //                 reply.send(data)
    //             } else
    //             {
    //                 reply.status(404).send({ message: 'The requested user profile could not be located on this server.' })
    //             }
    //         })
    //         .catch(e => {
    //             reply.status(500).send({ message: 'unable to connect' })
    //         })
    //     return reply
    // },

    // async update(request, reply) {
    //     const id = request.params.username
    //     const requestBody = request.body
    //     const mediaBaseUrl = '//' + request.hostname + '/uploads/profile/'
    //     const data = {}
    //     if (request.file)
    //     {
    //         data = {
    //             // requestBody,
    //             profile_pic: mediaBaseUrl + request.file.filename
    //         }
    //     } else
    //     {
    //         data = {
    //             // requestBody,
    //         }
    //     }



    //     await knex('users')
    //         .where('username', id)
    //         .update(data)
    //         .then(() => reply.send("Profile Updated successfully"))
    //         .catch(e => { reply.status(500).send(e) })
    //     return reply
    // },

    // delete(request, reply) {
    //     const id = request.params.username
    //     knex('users')
    //         .where('username', id)
    //         .del()
    //         .then(() => reply.send("Account successfully deleted"))
    //         .catch(e => { reply.status(e.status).send(e) })
    // }

}
