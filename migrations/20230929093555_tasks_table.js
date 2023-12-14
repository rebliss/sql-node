/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks',function(table){
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      table.string('client_name');
      table.string('image');
      table.string('description');
      table.string('lat');
      table.string('long');
      table.string('address');
      table.date('date');
      table.time('time');
      table.integer('task_category_id').unsigned();
      table.foreign('task_category_id')
      .references('task_categories.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      table.timestamps(true,true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  };
  