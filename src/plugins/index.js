
const app = require('./fastify')
const system = require('./admin/system')
const WS = require('./webSocket')
const knex = require('./knexDB')
const validator = require('./validator')
const mailer = require('./nodeMailer')
const crypt = require('./crypt')


// Some other frequently used plugins and modules
const path = require('path')
const fsx = require('fs-extra')
const multer = require('fastify-multer')
const bcrypt = require('bcrypt')
const sanitizeHTML = require('sanitize-html')


//some utils functions
const hlp = require('./helpers')

module.exports = {
    app,
    system,
    WS,
    knex,
    validator,
    mailer,
    crypt,
    path,
    fsx,
    multer,
    bcrypt,
    sanitizeHTML,
    hlp
}