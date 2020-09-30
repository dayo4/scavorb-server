const { validator } = require('../../plugins')


module.exports = {

    create (request, reply, done) {
        const schema = [
            {
                fieldName: 'Title',
                data: validator.sanitize(request.body.title),
                rules: {
                    required: true,
                    string: true,
                    min: 3,
                    max: 100
                },
            },
            {
                fieldName: 'Detail',
                data: request.body.detail,
                rules: {
                    required: true,
                    min: 100,
                    max: 3000
                }
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
        const { title, detail, images, active } = request.body

        let schema
        if (title || detail)
        {

            schema = [
                {
                    fieldName: 'Title',
                    data: validator.sanitize(request.body.title),
                    rules: {
                        required: true,
                        string: true,
                        min: 3,
                        max: 100
                    },
                },
                {
                    fieldName: 'Detail',
                    data: request.body.detail,
                    rules: {
                        required: true,
                        min: 100,
                        max: 3000
                    }
                }
            ]

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