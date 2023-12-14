/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('attendances',function(table){
        table.increments('id').primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        table.date('attendance_date');
        table.enum('attendance_status',['Absent','Present','Half-Day','Leave']);
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('attendances',function(table){
        table.increments('id').primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        table.date('attendance_date');
        table.enum('attendance_status',['Absent','Present','Half-Day','Leave']);
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
