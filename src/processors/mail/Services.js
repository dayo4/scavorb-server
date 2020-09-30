require('dotenv').config()
const { hlp, mailer } = require('../../plugins')
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
        const { email, name, subject, message, id } = request.body
        try
        {
            const mailOptions = {
                from: `${name} <${email}>`,
                to: 'dayorx68g@gmail.com',
                subject: subject,
                html: `
                    <p>An email from <b>${name} ${email}</b></p>

                    ${message}
                `
            }


            // return verifyMail.verify(email, {}, async (err, verified) => {

            // if (verified)
            // {
            const sent = await mailer.sendMail(mailOptions)
            if (sent)
            {
                return 'Your Message has been sent!'
            }
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
