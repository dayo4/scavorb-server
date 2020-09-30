const request = require('request')
const { hlp } = require('../plugins')


module.exports = {
    async verifyCaptchaToken (token) {
        const verifyCaptchaOptions = {
            uri: "https://www.google.com/recaptcha/api/siteverify",
            json: true,
            form: {
                secret: process.env.CAPTCHA_SECRET,
                response: token
            }
        }

        try
        {
            request.post(verifyCaptchaOptions, function (err, response, body) {
                if (err)
                {
                    return "oops, something went wrong on our side"
                }

                if (!body.success)
                {
                    return body[ "error-codes" ].join(".")
                }

                //Save the user to the database. At this point they have been verified.
                res.status(201).json({ message: "Congratulations! We think you are human." })
            })
        } catch (e)
        {
            hlp.error(error, code)
        }
    }
}