const { knex, path, fsx } = require('../../../plugins')


module.exports = {

    async upload (request, reply) {
        const user_id = request.params.user_id
        const post_id = request.params.post_id
        if (request.file)
        {
            const imageUrl = user_id + '/' + request.file.filename

            if (request.file.fieldname === 'featuredImage')
            {
                await knex('posts')
                    .where('id', post_id)
                    .update({ img: imageUrl })
                    .then(() => {
                        reply.send({
                            imageUrl: imageUrl
                        })
                    })
                    .catch(err => {
                        /* if there's an error at the database level, delete the image just uploaded to the directory.*/
                        const url = path.join(__dirname, '../..', 'uploads/images/posts/', user_id, '/', request.file.filename)
                        fsx.remove(url)
                            .catch(e => {
                                reply.status(500).send(e)
                            })
                        reply.status(500).send(err)
                    })
            }
            else
            {
                reply.send({
                    imageUrl: imageUrl
                })
            }
        }

        return reply
    },

    async delete (request, reply) {
        const user_id = request.params.id
        const images = request.body.imagesUrls //An array of image urls

        for (const url of images)
        {
            const imagePath = path.join(__dirname, '../..', 'uploads/images/posts/' + user_id, url)
            fsx.remove(imagePath).then(() => { }).catch(e => {
                reply.status(500).send(e)
            })
        }
        return reply
    }

}
