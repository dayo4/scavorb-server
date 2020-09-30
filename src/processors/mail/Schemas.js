const { validator } = require('../../plugins')

module.exports = {

    send (request, reply, done) {
        const { email, name, subject, message } = request.body

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
                data: name,
                rules: {
                    required: true,
                    string: true,
                    min: 3,
                    max: 50
                }
            },
            {
                fieldName: 'Subject',
                data: subject,
                rules: {
                    required: true,
                    string: true,
                    min: 3,
                    max: 50
                }
            },
            {
                fieldName: 'Message',
                data: message,
                rules: {
                    required: true,
                    string: true,
                    min: 50,
                    max: 4000
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