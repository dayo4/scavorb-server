require('dotenv').config()

const templates = {
    verifyEmail (link, email) {
        return {
            from: `mysite <mysite@mysite.com>`,
            to: email,
            subject: 'Confirm Your Email',
            html: `
                    <h2>Confirm Your Email</h2>
                    <p>Welcome, Thank you for registering. </p>
                    <p>To confirm your registration, click the link or button below.</p>
                    
                    <a href="${link}" style="padding: 10px; color: white; background-color:#c2185b;">Confirm</a>
                    
                    <p>This mail is sent from <b>mysite.com</b> to <b>${email}</b> because an account was register with this e-mail. If you did not request this, kindly ignore this mail.</p>
                `
        }
    },

    resetPassword (code, email, name) {
        return {
            from: `mysite <mysite@mysite.com>`,
            to: email,
            subject: 'Password Reset',
            html: `
                    <h2>Reset your password</h2>
                    <p>Hello ${name ? name : ''}, To confirm your password change, copy the code below and paste in the input field provided on the website.</p>
                    
                    <b style="padding: 10px; font-size: 30px;">${code}</b>
                    

                    <p>This mail is sent from <b>mysite.com</b> to <b>${email}</b> because you or someone had requested a password reset on your account. If you did not request this, kindly ignore this mail.</p>
                `
        }
        // <a href="${link}" style="padding: 10px; color: white; background-color:#c2185b;">Reset Password</a>
    },
}

module.exports = templates
