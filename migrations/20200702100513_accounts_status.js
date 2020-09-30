
exports.up = function (knex) {
    return knex.schema.hasTable('accounts_status').then(exists => {
        if (!exists) {
            return knex.schema.createTable('accounts_status', table => {
                table.increments('id').primary()
                table.integer('type').unsigned().notNullable()
                table.text('reason').notNullable()
                table.integer('user_id').unsigned().references('id').inTable('users')
                table.integer('actor_id').notNullable()
                table.date('created_at').notNullable()
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('accounts_status')
}
