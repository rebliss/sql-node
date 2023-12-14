/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users',function(table){
      table.increments('id').primary();
      table.string('name');
      table.integer('role').unsigned();
      table.foreign('role')
      .references('roles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  
      table.integer('user_manager_id');
      table.bigInteger('expense_monthly_limit');
      table.integer('user_km_charge');
      table.string('official_email');
      table.string('personal_email');
      table.string('official_number');
      table.string('personal_number');
      table.enum('gender',['male','female','other']);
      table.string('address');
      table.date('dob');
      table.string('emp_id');
  
  
      table.integer('organization_id').unsigned();
      table.foreign('organization_id')
      .references('organizations.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  
      table.string('designation');
      table.integer('company_id').unsigned();
      table.foreign('company_id')
      .references('companies.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      
      table.string('password');
      table.timestamps(true,true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  