/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // createTAble recebe 2 params recebe tabela criando:
  //
  return knex.schema.createTable('users', (tabela) => {
    tabela.increments('id').primary();
    tabela.string('first_name', 150).notNullable();
    tabela.string('last_name', 150)
    tabela.string('email', 255).notNullable().unique()
    tabela.string('password_hash', 255).notNullable().unique()
    tabela.decimal('salary', 15, 2).notNullable()
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user')
};
