const { validator, sanitizeHTML } = require('../../plugins')


module.exports = {

    create (request, reply, done) {
        const schema = [
            {
                fieldName: 'Title',
                data: sanitizeHTML(request.body.title),
                rules: {
                    required: true,
                    string: true,
                    min: 10,
                    max: 100
                },
            },
            {
                fieldName: 'Content',
                data: request.body.content,
                rules: {
                    required: true,
                },
            }
        ]
        if (validator.validate(schema))
        {
            done()
        } else
        {
            reply.status(400).send({ message: validator.getErrors() })
        }

    },

    update (request, reply, done) {
        const { title, content, contentImages, published, archived } = request.body

        let schema
        if (title || content)
        {

            schema = [
                {
                    fieldName: 'Title',
                    data: sanitizeHTML(request.body.title),
                    rules: {
                        required: true,
                        string: true,
                        min: 10,
                        max: 100
                    },
                },
                {
                    fieldName: 'Content',
                    data: request.body.content,
                    rules: {
                        required: true,
                    },
                }
            ]
            // else if(published)
            //     schema = [
            //         {
            //             fieldName: 'Content',
            //             data: request.body.content,
            //             rules: {
            //                 required: true,
            //             },
            //         }
            //     ]
            if (validator.validate(schema))
            {
                done()
            } else
            {
                reply.status(400).send({ message: validator.getErrors() })
            }
        } else
        {
            done()
        }

    }

}