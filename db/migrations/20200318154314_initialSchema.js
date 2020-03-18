exports.up = function(knex) {
  return knex.schema.then(() =>
    knex.schema.createTable('users', table => {
      table.increments('id')
      table.text('email').unique().notNullable()
      table.text('password')
      table.boolean('suspended').defaultTo(false)
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  )
};

exports.down = function(knex) {
  return knex.schema.then(() =>
    knex.schema.dropTable('users')
  )
};
