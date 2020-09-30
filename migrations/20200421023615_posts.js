
exports.up = function (knex) {
    return knex.schema.hasTable('posts').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('posts', table => {
                table.increments('id').primary()
                table.text('title').notNullable()
                table.string('slug', 225).notNullable()
                table.string('img', 100)
                table.longtext('content').notNullable()
                table.boolean('published').defaultTo(false)
                table.boolean('archived').defaultTo(false)
                table.boolean('approved').defaultTo(false)
                // table.integer('votes')
                table.integer('thumbs_up')
                table.integer('thumbs_down')
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
                // table.integer('category_id').unsigned().references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE')
                table.timestamps(true, true)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
}
