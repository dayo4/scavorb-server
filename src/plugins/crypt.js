require('dotenv').config()
const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
const ENCRYPTION_KEY = process.env.CRYPTO_KEY
const iv = crypto.randomBytes(16)

module.exports = {
    crypto,
    genString (length) {
        return crypto.randomBytes(length).toString('base64').split('/').join('')
    },
    encrypt (text) {
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv)
        let encrypted = cipher.update(text, 'utf8', 'hex')
        encrypted += cipher.final('hex')
        return encrypted
    },

    decrypt (text) {
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv)
        let decrypted = decipher.update(text, 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        return decrypted
    }
}