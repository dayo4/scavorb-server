require('dotenv').config()
const nodeMailer = require('nodemailer')
const templates = require('./templates')

const transport = nodeMailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: '587',
    // secure: 'false',
    // requireTLS: true,
    service: 'gmail',
    auth: {
        user: 'scavorb@gmail.com',
        pass: process.env.MAIL_PASS
    }
})

module.exports = {
    transport,
    templates
}
