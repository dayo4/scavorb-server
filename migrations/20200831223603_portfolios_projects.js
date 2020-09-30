exports.up = function (knex) {
    return knex.schema.hasTable('portfolios_projects').then(exists => {
        if (!exists) {
            return knex.schema.createTable('portfolios_projects', table => {
                table.increments('id').primary()
                table.string('title', 100).notNullable()
                table.longtext('detail').notNullable()
                table.text('images')
                table.boolean('active').defaultTo(true)
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
                table.timestamps(true, true)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('portfolios_projects')
}

