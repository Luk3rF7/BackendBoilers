/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_role', (tabela) => {
    tabela.integer('user_id').unsigned();
    tabela.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    //
    tabela.integer('role_id').insigned();
    tabela.foreign('role_id').references('roles.id').onDelete('CASCADE').onUpdate('CASCADE')
    tabela.primary(['user_id', 'role_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
