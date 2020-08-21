
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pessoas',table=>{
      table.increments('id').primary()
      table.string('name', 80).notNullable()
      table.string('email', 80).notNullable()
      table.integer('idade',11).notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pessoas')
};
