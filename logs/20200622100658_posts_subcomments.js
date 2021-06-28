
exports.up = function (knex) {
    return knex.schema.hasTable('posts_subcomments').then(exists => {
        if (!exists) {
            return knex.schema.createTable('posts_subcomments', table => {
                table.increments('id').primary()
                table.text('content').notNullable()
                table.integer('thumbs_up')
                table.integer('thumbs_down')
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
                table.integer('comment_id').unsigned().references('id').inTable('posts_comments').onUpdate('CASCADE').onDelete('CASCADE')
                table.integer('post_id').unsigned().references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')
                table.timestamps(true, true)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('posts_subcomments')
}
