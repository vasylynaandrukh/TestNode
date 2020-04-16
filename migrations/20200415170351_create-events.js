
exports.up = function(knex) {
 return  knex.schema.createTable('events', (table) => {
     table.increments();
     table.string('name');
     table.string('description');
     table.time('date');

 })
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
  
};
