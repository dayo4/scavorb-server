// const { isEmptyObject } = require('../utils/functions')
// const App = require('../../services/index')
const { knex, path, fsx } = require('../../../plugins')



module.exports = {
    // async fetchImages (request, reply) {
    //     const id = request.params.user_id

    //     try
    //     {

    //         const images = await knex.select().from('users_images').where('user_id', id)
    //         reply.send(images)

    //     } catch (e)
    //     {
    //         reply.status(500).send(e)
    //     }

    //     return reply
    // },
    async upload (request, reply) {
        const id = request.params.user_id
        if (request.file)
        {
            const imageUrl = id + '/' + request.file.filename
            const imageClass = request.file.fieldname
            /* This is temporarily disabled */
            // await knex('users_images').insert({ url: imageUrl, user_id: id, class: imageClass })
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

    // async delete (request, reply) {
    //     const user_id = request.params.user_id
    //     const images = request.body.imagesIdArray //An array of image IDs

    //     for (const image_id of images)
    //     {
    //         try
    //         {
    //             const data = await knex('users_images').where('user_id', user_id).andWhere('id', image_id).select('url').first()
    //             const imageName = data.url

    //             const deleted = await knex('users_images').where('user_id', user_id).andWhere('id', image_id).del()
    //             if (deleted)
    //             {
    //                 /*also delete the image from the directory*/
    //                 const url = path.join(__dirname, '../..', 'uploads/images/users/' + user_id, '/' + imageName)

    //                 fsx.remove(url)
    //                     .then(() => {
    //                         reply.send("The image(s) have been deleted.")
    //                     }).catch(e => {
    //                         reply.status(500).send(e)
    //                     })
    //             }
    //         }
    //         catch (e)
    //         {
    //             reply.status(500).send(e)
    //         }
    //         return reply
    //     }

    // }
}
