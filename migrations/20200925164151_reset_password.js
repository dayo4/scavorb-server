
exports.up = function (knex) {
    return knex.schema.hasTable('reset_password').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('reset_password', table => {
                table.string('secret', 255).notNullable()
                table.string('email').unique().notNullable()
                table.string('expiration').notNullable()
                table.boolean('verified').defaultTo(false)
            })
        }
    })

}

exports.down = function (knex) {
    return knex.schema.dropTable('reset_password')
}
