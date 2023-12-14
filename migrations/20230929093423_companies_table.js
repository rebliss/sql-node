/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('companies',function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('lat');
      table.string('long');
      table.string('address');
      table.integer('organization_id').unsigned();
      table.foreign('organization_id')
      .references('organizations.id')
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
    
  };
  