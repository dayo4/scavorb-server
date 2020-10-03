require('dotenv').config()
const { hlp, mailer, reCaptcha, sanitizeHTML } = require('../../plugins')
// const Verifier = require("email-verifier")
// const verifyMail = new Verifier(process.env.VERIFIER_API_KEY/* , {
//     retries: 2,
// } */)
// new Verifier(process.env.VERIFIER_API_KEY, {
//     retries: 2,
// }).verify('email', opts, (err, data) => {
//     if (err)
//         console.log(err)
//     else
//         console.log(data)
// })

module.exports = {
    async send (request) {
        const email = request.body.email
        const name = sanitizeHTML(request.body.name)
        const subject = sanitizeHTML(request.body.subject)
        const message = sanitizeHTML(request.body.message)
        const token = request.body.token

        try
        {
            const mailOptions = {
                from: `${name} <${email}>`,
                to: 'scavorb@gmail.com',
                subject: subject,
                html: `
                    <p>An email sent from scavorb's contact form  by - <b>${name} ${email}</b></p>.
                    <hr>
                    ${message}
                `
            }
            const captchaData = await reCaptcha.verifyCaptchaToken(token)
            if (captchaData)
            {
                if (captchaData.success === true)
                {
                    const sent = await mailer.transport.sendMail(mailOptions)
                    if (sent)
                    {
                        return 'Your Message has been sent! Thanks you.'
                    }
                    // console.log('failed')
                }
            }

            // return verifyMail.verify(email, {}, async (err, verified) => {

            // if (verified)
            // {

            // else
            // {
            //     hlp.error('Unable to send mail, Try again soon.')
            // }
            // }
            //     else
            //     {
            //         console.log('mmmmmm', err)
            //         hlp.error('Unable to verify mail, Try again soon.')
            //     }
            // })

        }
        catch (e)
        {
            hlp.error('Unable to send mail due to mail service connection error, Please use other medium above or try again soon.')
        }
    }

}
