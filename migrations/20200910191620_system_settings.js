exports.up = function (knex) {
    return knex.schema.hasTable('system_settings').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('system_settings', table => {
                table.boolean('allow_new_reg').defaultTo(false)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('system_settings')
}

