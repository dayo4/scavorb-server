
exports.up = function (knex) {
    return knex.schema.hasTable('posts_images').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('posts_images', table => {
                table.increments('id').primary()
                table.string('urls', 2000).notNullable()
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
                table.integer('post_id').unsigned().references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('posts_images')
}
