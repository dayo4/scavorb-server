
exports.up = function (knex) {
    return knex.schema.hasTable('unverified_users').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('unverified_users', table => {
                table.string('secret', 255).notNullable()
                table.string('email').unique().notNullable()
                table.string('expiration').notNullable()
            })
        }
    })

}

exports.down = function (knex) {
    return knex.schema.dropTable('unverified_users')
}
