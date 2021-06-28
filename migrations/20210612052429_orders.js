
exports.up = function (knex) {
    return knex.schema.hasTable('orders').then(exists => {
        if (!exists)
        {
            return knex.schema.createTable('orders', table => {
                table.increments('id').primary()
                table.string('number', 255).notNullable()
                table.string('order_key', 255).notNullable()
                table.string('created_via', 255)
                table.string('status', 255).defaultTo('pending') //pending, processing, on-hold, completed, cancelled, refunded, failed and trash. 
                table.string('currency', 255)//in ISO format.
                table.text('billing_details') //stringify json object
                table.text('shipping_details')//stringify json object
                table.string('discount_total', 50)
                table.string('discount_tax', 50)
                table.string('shipping_total', 50)
                table.string('cart_tax', 50)
                table.string('total', 50)
                table.string('total_tax', 50)
                table.boolean('prices_include_tax').defaultTo(false)
                table.string('user_ip', 50)
                table.string('customer_user_agent', 50)
                table.text('customer_note', 50) //Note left by customer during checkout.
                table.string('payment_method', 255)
                table.string('payment_method_title', 255)
                table.date('date_paid')
                table.date('date_completed')
                table.string('cart_hash', 255) //MD5 hash of cart items to ensure orders are not modified.
                table.string('city', 30)
                table.boolean('verified').defaultTo(false)
                table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE')
                table.timestamps(true, true)
            })
        }
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('orders')

}
