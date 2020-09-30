knex.select('title', 'author', 'year').from('books').where('author', 'Test')
knex.table('users').first('id', 'name').then(function (row) { console.log(row) })

knex.column('title', { by: 'author' }, 'year').select().from('books')
knex('users').where({
    first_name: 'Test',
    last_name: 'User'
}).select('id')
// select * from`users` where(`id` in (1, 11, 15) and`id` not in (17, 19)) and(`id` > 10)
knex.select('name').from('users')
    .whereIn('id', [1, 2, 3])
    .orWhereIn('id', [4, 5, 6])
knex('users')
    .whereNot('votes', '>', 100)
    .andWhere('status', 'active') 
    .orWhere('name', 'John')
    .select('id')
knex('users').whereNotIn('id', [1, 2, 3])
knex('users').whereNull('updated_at')
knex('users').whereNotNull('created_at')
knex('users').whereExists(function () {
    this.select('*').from('accounts').whereRaw('users.account_id = accounts.id')
})

knex('users')
    .join('contacts', 'users.id', '=', 'contacts.user_id')
    .select('users.id', 'contacts.phone')
knex.select('*').from('users').join('contacts', function () {
    this.on('users.id', '=', 'contacts.id').onIn('contacts.id', [7, 15, 23, 41])
})
knex.select('*').from('users').join('contacts', function () {
    this.on('users.id', '=', 'contacts.id').onNotIn('contacts.id', [7, 15, 23, 41])
})
knex.select('*').from('users').join('contacts', function () {
    this.on('users.id', '=', 'contacts.id').onNull('contacts.email')
})
knex.select('*').from('users').join('contacts', function () {
    this.on('users.id', '=', 'contacts.id').onNotNull('contacts.email')
})
knex.select('*').from('users').join('contacts', function () {
    this.on('users.id', '=', 'contacts.id').onExists(function () {
        this.select('*').from('accounts').whereRaw('users.account_id = accounts.id')
    })
})
knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id')
knex.select('*').from('users').leftJoin('accounts', 'users.id', 'accounts.user_id')
knex.select('*').from('users').leftOuterJoin('accounts', 'users.id', 'accounts.user_id')
knex.select('*').from('users').rightJoin('accounts', 'users.id', 'accounts.user_id')
knex.select('*').from('users').rightOuterJoin('accounts', 'users.id', 'accounts.user_id')
knex.select('*').from('users').fullOuterJoin('accounts', 'users.id', 'accounts.user_id')





knex('accounts')
    .where('id', '=', 1)
    .update({ email: 'foo@bar.com' })
knex('users').groupBy('count')
knex('users').orderBy('email')
knex('users').orderBy('name', 'desc')
knex('users').orderBy(['email', { column: 'age', order: 'desc' }])
knex.select('*').from('users').offset(10)
knex.select('*').from('users').limit(10).offset(30)

knex('books').insert({ title: 'Slaughterhouse Five' })
knex.insert([{ title: 'Great Gatsby' }, { title: 'Fahrenheit 451' }], ['id']).into('books')
// Returns [ { id: 42, title: "The Hitchhiker's Guide to the Galaxy" } ]
knex('books')
    .where({ id: 42 })
    .update({ title: "The Hitchhiker's Guide to the Galaxy" }, ['id', 'title'])
knex('accounts')
    .where('activated', false)
    .del()
knex('accounts').truncate()

knex('users').count('active')
knex('users').min('age')
knex('users').max('age')

knex.table('users').pluck('id').then(function (ids) { console.log(ids) })
