const { knex, path, fsx } = require('../../../plugins')



module.exports = {

    async upload (request, reply) {
        const id = request.params.user_id
        if (request.file)
        {
            const imageUrl = id + '/' + request.file.filename
            const imageClass = request.file.fieldname

            function whichImage () {
                if (imageClass === 'profileImage')
                {
                    return {
                        profile_image: imageUrl
                    }
                }
                else if (imageClass === 'coverImage')
                {
                    return {
                        cover_image: imageUrl
                    }
                }
            }

            const imageToStore = whichImage()

            try
            {
                /* Remove Existing Image */
                const key = Object.keys(imageToStore)[ 0 ]
                const prevImage = await knex('users').where('id', id).select(key).first()

                if (prevImage && prevImage[ key ] && prevImage[ key ].indexOf('/img_') != -1)
                {
                    const url = path.join(__dirname, '../../..', 'uploads/images/users/' + prevImage[ key ])
                    fsx.remove(url)
                        .catch(e => {
                            reply.status(500).send(e)
                        })
                }

                /* Upload new image */
                const updated = await knex('users').where('id', id).update(imageToStore)

                if (updated)
                {
                    reply.send({
                        user: {
                            ...imageToStore
                        }
                    })
                }
            }
            catch (err)
            {
                /* if there's an error at the database level, delete the image just uploaded to the directory.*/
                const url = path.join(__dirname, '../../..', 'uploads/images/users/' + imageUrl)
                fsx.remove(url)
                    .catch(e => {
                        reply.status(500).send(e)
                    })
                reply.status(500).send(err)
            }
        }

        return reply
    },

}
