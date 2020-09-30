
exports.up = function (knex) {
    return knex.schema.hasTable('users').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('users', table => {
                table.increments('id').primary()
                table.string('username', 20).unique().notNullable()
                table.string('email', 50).unique().notNullable()
                table.string('password', 255).notNullable()
                table.string('first_name', 100)
                table.string('last_name', 100).defaultTo('')
                table.string('status', 50)
                table.text('about')
                table.string('profile_image', 255)
                table.string('cover_image', 255)
                table.integer('priv').defaultTo(0)
                table.boolean('verified').defaultTo(false)
                table.boolean('active').defaultTo(false)
                table.boolean('blacklisted').defaultTo(false)
                table.timestamps(true, true)
            })
        }
    })

}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
