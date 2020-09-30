const { knex, hlp, system, mailer, crypt } = require('../../plugins')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

async function sharedEmailVerificationFunction (email, request) {
    const alreadyRecorded = await knex('unverified_users').where({ email }).select('expiration').first()
    const secret = crypt.genString(8)
    const token = crypt.encrypt(JSON.stringify({ email, secret }))
    const mailOptions = mailer.templates.verifyEmail(`http://${process.env.NODE_ENV === 'production' ? request.headers.host : 'localhost:8080'}/confirmation/${token}`, email)
    const sent = await mailer.transport.sendMail(mailOptions)
    if (sent)
    {
        if (alreadyRecorded)
            await knex('unverified_users').where({ email }).update({ secret, expiration: Date.now() + 3600000 })
        else
            await knex('unverified_users').insert({ email, secret, expiration: Date.now() + 3600000 })

        return 'Welcome, your e-mail needs to be verified. Click the confirmation link sent to your e-mail to complete the process. Check your inbox or spam folder. Thank you!'
    }
    else
        hlp.error('Encountered a network error, please try again. Or proceed to login')
}

module.exports = {

    async register (request) {
        const data = { username, email } = request.body
        // const mediaBaseUrl = '//' + request.hostname + '/image/'

        // const someNames = [ "Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon" ]
        // function randomName () {
        //     return someNames[ Math.floor(Math.random() * someNames.length) ]
        // }
        if (system.settings.allow_new_reg === false)
        {
            return "New registration is disallowed"
        }

        try
        {
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const adjustedData = {
                ...data,
                password: hashedPassword,
                profile_image: '1.jpg',
                about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita iure accusamus consequuntur totam officia vel ipsa dolor, porro nesciunt ratione quo nulla, minima obcaecati, provident vitae sapiente voluptas autem libero?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita iure accusamus consequuntur totam officia vel ipsa dolor, porro nesciunt ratione quo nulla, minima obcaecati, provident vitae sapiente voluptas autem libero.',
                status: "Hey there! I'm available."
            }

            const user_id = await knex('users').insert(adjustedData)
            if (user_id)
            {
                return await sharedEmailVerificationFunction(email, request)
            }
        }
        catch (e)
        {
            if (e.sqlMessage)
                if (e.sqlMessage.indexOf('username_unique') !== -1)
                {
                    hlp.error("This username is already taken.")
                } else if (e.sqlMessage.indexOf('email_unique') !== -1)
                {
                    hlp.error("This email is already taken.")
                }
                else
                    hlp.error(e)
            else
                hlp.error(e)
        }
    },

    async login (request) {
        const data = { email, password, first_name, last_name, stage } = request.body

        try
        {
            if (stage === 2)
            {
                await knex('users').where({ email: data.email }).update({ first_name, last_name })
            }

            const foundUser = await knex('users').where({ email: data.email })/* .orWhere('username', data.email) */
                .select('id', 'priv', 'username', 'password', 'status', 'about', 'profile_image', 'first_name', 'last_name', 'active', 'verified').first()

            if (foundUser)
            {
                const matched = await bcrypt.compare(data.password, foundUser.password)
                if (matched)
                {
                    if (foundUser.verified)
                    {
                        if (!foundUser.first_name)/* Means user is signing in for first time. Need to give names.*/
                        {
                            return { next: true }
                        }

                        if (foundUser.active)
                        {
                            const user = { id, priv, username, password, status, about, profile_image, first_name, last_name } = foundUser

                            const toSign = {
                                id: id,
                                username: username,
                                pr: priv
                            }
                            const token = jwt.sign({ data: toSign }, process.env.JWT_SECRET, {
                                expiresIn: '24h'
                            })
                            return {
                                user: { id, username, status, about, profile_image, first_name, last_name },
                                token
                            }
                        }
                        else
                        {
                            hlp.error("Your account is currently disabled.")
                        }
                    }
                    else
                    {
                        return await sharedEmailVerificationFunction(email, request)
                    }
                } else
                {
                    hlp.error("Incorrect password, verify and try again", 403)
                }
            }
            else
            {
                hlp.error("Incorrect login details, verify and try again", 403)
            }
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async getSettings (request) {
        try
        {
            const settings = await knex.select().from('system_settings').first()

            return settings
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async verifyEmail (request) {
        try
        {
            const data = JSON.parse(crypt.decrypt(request.body.token))
            if (data)
            {
                let user = await knex('unverified_users').where('user_id', data.id).select('expiration').first()
                if (user)
                    if (user.expiration < Date.now())
                    {
                        hlp.error('This confirmation link has expired.')
                    }
                    else
                    {
                        await knex('users').update({ verified: true, active: true })
                        await knex('unverified_users').where('user_id', data.id).del()
                        return 'Email verified'
                    }
                else
                {
                    hlp.error('Invalid confirmation link')
                }
            } else
            {
                hlp.error('Invalid confirmation link')
            }
        } catch (e)
        {
            hlp.error(e)
        }

    },

    async resetPassword (request) {
        const { stage_1, stage_2, stage_3 } = request.body

        try
        {
            if (stage_1)
            {
                const email = stage_1.email
                const foundUser = await knex('users').where({ email }).select('email', 'first_name').first()
                if (!foundUser)
                {
                    hlp.error("This e-mail address is not yet registered", 403)
                } else
                {
                    const alreadyRecorded = await knex('reset_password').where({ email }).select('email').first()
                    const secret = crypt.genString(8)
                    const mailOptions = mailer.templates.resetPassword(/* `http://${process.env.NODE_ENV === 'production' ? request.headers.host : 'localhost:8080'}/reset/${token}` */secret, email, foundUser.first_name)
                    const sent = await mailer.transport.sendMail(mailOptions)
                    if (sent)
                    {
                        const expiration = Date.now() + 300000
                        if (alreadyRecorded)
                            await knex('reset_password').where({ email }).update({ secret, expiration })
                        else
                            await knex('reset_password').insert({ email, secret, expiration })
                        return {
                            stage: 2, info: 'Code sent! Copy the confirmation code sent to your e-mail and paste into the input field above. Code expires in 5 minutes. Check your inbox or spam folder.'
                        }
                    } else
                    {
                        hlp.error('Encountered a network error, please try again.')
                    }
                }
            } else if (stage_2)
            {
                const { token, email } = stage_2

                let found = await knex('reset_password').where({ email, secret: token }).select('expiration').first()
                if (found)
                    if (found.expiration < Date.now())
                    {
                        hlp.error('This code has expired.')
                    }
                    else
                    {
                        await knex('reset_password').where({ email }).update({ verified: true })
                        return { stage: 3, info: 'Verified! Now choose a new password' }
                    }
                else
                {
                    hlp.error('Invalid code')
                }
            } else if (update)
            {
                const { email, password } = update
                const verified = await knex('reset_password').where({ email, verified: true }).first()
                if (verified)
                {
                    const hashedPassword = await bcrypt.hash(password, 10)
                    const updated = await knex('users').where({ email }).update({ password: hashedPassword, verified: true, active: true })
                    if (updated)
                    {
                        await knex('reset_password').where({ email }).del()
                        return 'Your account has been updated'
                    }
                }

            }
        } catch (e)
        {
            hlp.error(e)
        }
    }
}
