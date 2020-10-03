require('dotenv').config()
const fetch = require('node-fetch')

module.exports = {
    async verifyCaptchaToken (token) {
        const verifyCaptchaOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.CAPTCHER_SECRET_KEY}&response=${token}`
        }

        try
        {
            return fetch("https://www.google.com/recaptcha/api/siteverify", verifyCaptchaOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(e => console.log(e))
        } catch (e)
        {
            throw new Error(e)
        }
    }
}