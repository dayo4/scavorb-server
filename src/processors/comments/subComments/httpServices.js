const { knex } = require('../../../plugins')


module.exports = {
    async create(request, reply) {
        const user_id = request.params.user_id
        const comment_id = request.params.comment_id
        const comment = request.body.comment

        try {
            const created = await knex('posts_subcomments').insert({ content: comment, user_id: user_id, comment_id: comment_id })

            reply.send(created)
        }

        catch (e) {
            reply.status(500).send(e)
        }
        return reply
    },


    async findOne(request, reply) {
        // const user_id = request.params.user_id
        const comment_id = request.params.comment_id
        try {
            const comment = await knex.select('id', 'user_id', 'post_id', 'comment_id', 'thumbs_up', 'thumbs_down', 'content', 'created_at').from('posts_subcomments').where('id', comment_id).first()
            if (comment) {

                try {
                    const user = await knex.select('profile_image', 'first_name', 'last_name').from('users').where('id', comment.user_id).first()
                    reply.send({
                        ...comment,
                        comment_user: user
                    })
                }
                catch (e) {
                    reply.status(500).send(e)
                }
            } else {
                reply.status(404).send({ message: 'The requested comment could not be located.' })
            }
        }
        catch (e) {
            reply.status(500).send(e)
        }
        return reply
    },

    async update(request, reply) {
        const user_id = request.params.user_id
        const comment_id = request.params.comment_id
        const { content } = request.body


        try {

            if (content) {
                const data = {
                    content: content
                }

                const updated = await knex('posts_subcomments').where('id', comment_id).andWhere('user_id', user_id).update(data)
                reply.send(updated)
            }

        }
        catch (e) {
            reply.status(500).send(e)
        }

        return reply
    },

    async delete(request, reply) {
        const user_id = request.params.user_id
        const comment_id = request.params.comment_id


        try {
            const deleted = await knex('posts_subcomments').where('id', comment_id).andWhere('user_id', user_id).del()
            if (deleted)
                reply.send(`Comment deleted successfully.`)
        }
        catch (e) {
            reply.status(500/* 401 */).send({ error: e, message: 'Unable to delete content. No comment was deleted.' })
        }

        return reply
    }

}
