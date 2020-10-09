const { knex } = require('../../../plugins')


module.exports = {
    async create (request, reply) {
        const user_id = request.params.user_id
        const post_id = request.params.post_id
        const comment = request.body.comment

        try
        {
            const comment_id = null//await knex('posts_comments').insert({ content: comment, user_id: user_id, post_id: post_id })

            reply.send(comment_id)
        }

        catch (e)
        {
            reply.status(500).send(e)
        }
        return reply
    },


    async findComments (request, reply) {
        const post_id = request.params.post_id
        const query = JSON.parse(request.params.query)
        const limit = query.limit
        const offset = query.offset
        const sort = query.sort

        async function fetchCommentUser (comment) {
            const user = await knex.select('profile_image', 'username', '', 'last_name').from('users').where('id', comment.user_id).first()
            if (user)
            {
                return {
                    ...comment,
                    comment_user: user
                }
            }
        }

        try
        {
            const fetchedComments = await knex.select('id', 'user_id', 'post_id', 'thumbs_up', 'thumbs_down', 'content', 'created_at').from('posts_comments').where('post_id', post_id).orderBy(...sort).limit(limit).offset(offset)
            const commentCount = await knex('posts_comments').where('post_id', post_id).count()

            if (fetchedComments.length > 0)
            {
                const comments = []
                fetchedComments.forEach((comment) => {
                    fetchCommentUser(comment).then(result => {
                        comments.push(result)
                        if (comments.length === fetchedComments.length)
                        {
                            reply.send({ comments, count: commentCount[ 0 ][ "count(*)" ] })
                        }
                    })
                })
            } else
            {
                reply.send({ comments: fetchedComments, count: 0 })
            }
        }
        catch (e)
        {
            reply.status(500).send({ message: e })
        }
        return reply
    },

    async findOne (request, reply) {
        const comment_id = request.params.comment_id
        try
        {
            const comment = await knex.select('id', 'user_id', 'post_id', 'thumbs_up', 'thumbs_down', 'content', 'created_at').from('posts_comments').where('id', comment_id).first()
            if (comment)
            {

                try
                {
                    const user = await knex.select('profile_image', '', 'last_name').from('users').where('id', comment.user_id).first()
                    reply.send({
                        ...comment,
                        comment_user: user
                    })
                }
                catch (e)
                {
                    reply.status(500).send(e)
                }
            } else
            {
                reply.status(404).send({ message: 'The requested comment could not be located.' })
            }
        }
        catch (e)
        {
            reply.status(500).send(e)
        }
        return reply
    },

    async update (request, reply) {
        const user_id = request.params.user_id
        const comment_id = request.params.comment_id
        const { content } = request.body


        try
        {

            if (content)
            {
                const data = {
                    content: content
                }
                const updated = await knex('posts_comments').where('id', comment_id).andWhere('user_id', user_id).update(data)
                reply.send(updated)
            }
        }
        catch (e)
        {
            reply.status(500).send(e)
        }
        return reply
    },

    async delete (request, reply) {
        const user_id = request.params.user_id
        const comment_id = request.params.comment_id

        try
        {
            const deleted = await knex('posts_comments').where('id', comment_id).andWhere('user_id', user_id).del()
            if (deleted)
                reply.send(`Comment deleted successfully.`)
        }
        catch (e)
        {
            reply.status(500/* 401 */).send({ error: e, message: 'Unable to delete content. No comment was deleted.' })
        }

        return reply
    }

}
