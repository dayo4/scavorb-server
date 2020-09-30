
exports.up = function (knex) {
    return knex.schema.hasTable('users_images').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('users_images', table => {
                table.bigIncrements('id').primary()
                table.string('url', 255).unique().notNullable()
                table.string('class').notNullable()
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
                table.timestamps(true, true)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users_images')
}
