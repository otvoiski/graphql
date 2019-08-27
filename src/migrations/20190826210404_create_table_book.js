
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary()
    table.string('title', 80).notNullable()
    table.string('author', 50).notNullable()
    table.string('publisher', 50).notNullable()
    table.date('releaseDate').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
