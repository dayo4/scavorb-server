const { validator } = require('../../plugins')
function validate (schema, done) {
    if (validator.validate(schema))
    {
        done()
    } else
    {
        reply.status(400).send({ message: validator.getErrors({ format: 'single' }) })
    }
}

module.exports = {

    update (request, reply, done) {
        const { status, about, first_name, last_name, old_password, new_password, active } = request.body

        let schema
        if (first_name || last_name)
        {
            const schema = [
                {
                    fieldName: 'First Name',
                    data: validator.sanitize(first_name),
                    rules: {
                        string: true, min: 2, max: 20, pattern: /^[a-zA-Z]$/
                    },
                },
                {
                    fieldName: 'First Name',
                    data: last_name,
                    rules: { string: true, min: 2, max: 20, pattern: /^[a-zA-Z]$/ }
                },
            ]
            validate(schema, done)

        }
        else if (about)
        {
            const schema = [
                {
                    fieldName: 'About',
                    data: validator.sanitize(about),
                    rules: { string: true, min: 15, max: 1000 }
                },
            ]
            validate(schema, done)
        }
        else if (old_password || new_password)
        {
            const schema = [
                {
                    fieldName: 'Old Password',
                    data: old_password,
                    rules: { string: true, min: 6, max: 50 }
                },
                {
                    fieldName: 'New Password',
                    data: new_password,
                    rules: { string: true, min: 6, max: 50 }
                },
            ]
            validate(schema, done)
        }
        else if (status)
        {
            const schema = [
                {
                    fieldName: 'Status',
                    data: status,
                    rules: { string: true, max: 150 }
                }
            ]
            validate(schema, done)
        }

        else
        {
            done()
        }

    }

}