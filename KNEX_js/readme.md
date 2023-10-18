<h1>Knex.js TypeOrm </h1>

 <p>
 <li>ORM -> Sequelize,bookshelf.js
 <li>Query Builder ->  são  (Knex.js)
 <li> Consulta crua (Raw query) -> db('user').where('{id:550}')

<div>

      SELECT u.id as uid,u.first_name,r.name,p.bio
      FROM users u
      left join users_roles ur on u.id = ur.user_id
      left join roles r on ur.roles_id = r.id
      left join profiles p on p.user_id = u.id
      WHERE u.id = 550
      ORDER u.id BY ASC

<div>

<h2> knex commando - install </h2>

<li> npm i pg
<li> npm i sqlite3
<li> npm i mysql
<li> npm i mysql2
<li> npm i oracledb
<li> npm i mssql

<li> criar knexfile onde podemos inicializar </li>
<li>knex migrate:make 'criar' </li>

<p>
     As migratuins tem up e down :
* quando eu executar o comando que tiver no up vai executar
 onde podemos criar tabela de dados :

     exports.up = function (knex) {
          // createTAble recebe 2 params recebe tabela criando:
          //
          return knex.schema.createTable('users',(tabela) => {
               tabela.increments('id').primary();
               tabela.string('first_name',150).notNullable();
               tabela.string('last_name',150)
               tabela.string('email',255).notNullable().unique()
               tabela.string('password_hash',255).notNullable().unique()
               tabela.decimal('salary',15,2).notNullable()
          })

     };

\*Com down a gente faz o contrario a gente vai desfazer quase tudo:

          exports.down = function (knex) {
               return knex.schema.dropTable('users');
          };

logo apos utilizamos comando -> npx knex migrate:latest
comando que desfaz e -> npx knex migrate:rollback

</p>
