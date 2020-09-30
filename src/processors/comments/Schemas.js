const { validator } = require('../../plugins')


module.exports = {

    create(request, reply, done) {
        const schema = [
            {
                fieldName: 'Comment',
                data: validator.sanitize(request.body.comment, { strict: false }),
                rules: {
                    required: true,
                    string: true,
                },
            },
        ]
        if (validator.validate(schema)) {
            done()
        } else {
            reply.status(400).send({ message: validator.getErrors() })
        }

    },

    update(request, reply, done) {
        const schema = [
            {
                fieldName: 'Comment',
                data: validator.sanitize(request.body.comment, { strict: false }),
                rules: {
                    required: true,
                    string: true,
                },
            },
        ]
        if (validator.validate(schema)) {
            done()
        } else {
            reply.status(400).send({ message: validator.getErrors() })
        }

    }

}