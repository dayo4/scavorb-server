const { validator, sanitizeHTML } = require('../../plugins')

module.exports = {

    send (request, reply, done) {
        const { email, name, subject, message, token } = request.body

        const schema = [
            {
                fieldName: 'Email',
                data: email,
                rules: {
                    required: true,
                    email: true,
                }
            },
            {
                fieldName: 'Name',
                data: sanitizeHTML(name),
                rules: {
                    required: true,
                    string: true,
                    min: 3,
                    max: 50
                }
            },
            {
                fieldName: 'Subject',
                data: sanitizeHTML(subject),
                rules: {
                    required: true,
                    string: true,
                    min: 3,
                    max: 100
                }
            },
            {
                fieldName: 'Message',
                data: sanitizeHTML(message),
                rules: {
                    required: true,
                    string: true,
                    min: 20,
                    max: 4000
                }
            },
            {
                fieldName: 'Token',
                data: token,
                rules: {
                    required: true,
                    string: true,
                }
            }
        ]

        if (validator.validate(schema))
        {
            done()
        } else
        {
            reply.status(400).send({ message: validator.getErrors({ format: 'single' }) })
        }
    }

}