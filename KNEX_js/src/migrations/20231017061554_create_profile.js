exports.up = function (knex) {
  // createTAble recebe 2 params recebe tabela criando:
  //
  return knex.schema.createTable('profile', (tabela) => {
    tabela.increments('id').primary();
    tabela.text('bio', 150);
    tabela.text('description', 150);
    // fazendo relação 1 para 1
    tabela.interger('user_id').unique().unsigned();
    tabela.foreign('user_id')
      .references('user.id')
      .onDelete('CASCADE'
      ).onUpdate('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profile')
};