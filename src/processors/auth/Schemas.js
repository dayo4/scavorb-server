const { validator } = require('../../plugins')


module.exports = {

    Register (request, reply, done) {
        const schema = [
            {
                fieldName: 'Username',
                data: request.body.username,
                rules: {
                    required: true,
                    string: true,
                    pattern: /^([a-zA-Z]{3,})([0-9])*$/,
                    min: 3,
                    max: 15
                },
                message: {
                    pattern: 'Username may only contain letters and numbers. Must start with minimum of 3 letters'
                }
            },
            {
                fieldName: 'Email',
                data: request.body.email,
                rules: {
                    required: true,
                    string: true,
                    email: true
                },
            },
            {
                fieldName: 'Password',
                data: request.body.password,
                rules: {
                    required: true,
                    string: true,
                    min: 8,
                },
            }
        ]
        if (validator.validate(schema))
        {
            done()
        } else
        {
            reply.status(400).send({ message: validator.getErrors({ format: 'single' }) })
        }

    },

    Login (request, reply, done) {
        const { email, password, first_name, last_name, stage } = request.body
        const schema1 = [
            {
                fieldName: 'Email',
                data: email,
                rules: {
                    required: true,
                    string: true,
                    email: true
                },
            },
            {
                fieldName: 'Password',
                data: password,
                rules: {
                    required: true,
                    string: true,
                },
            }
        ]
        const schema2 = [
            {
                fieldName: 'First Name',
                data: this.fname,
                rules: { required: true, string: true, min: 2, max: 20, pattern: /^[a-zA-Z]$/ },
                message: { pattern: 'Name may only contain letters' }
            },
            {
                fieldName: 'First Name',
                data: this.lname,
                rules: { required: true, string: true, min: 2, max: 20, pattern: /^[a-zA-Z]$/ },
                message: { pattern: 'Name may only contain letters' }
            }
        ]

        if (validator.validate(stage != 2 ? schema1 : schema1.push(...schema2)))
        {
            done()
        } else
        {
            reply.status(400).send({ message: validator.getErrors({ format: 'single' }) })
        }
    }
}