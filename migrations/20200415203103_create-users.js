
exports.up = function(knex) {
    return  knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.time('birthday');
   
    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('users');
  
};
