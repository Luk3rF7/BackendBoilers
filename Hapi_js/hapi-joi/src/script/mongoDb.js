/*
  todo :
 * docker ps:
 docker exec -it mongo -u usuario -p senha -authentucationDatabase banco de dado

 * database:

  show dbs

 * mudando o contexto para uma database:

  use herois
  * mostrar coleção:

 show collection
 */
// * Demostração: 
debugger.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})

// * buscar 
db.herois.find()
// buscar de forma fomatado :
db.herois.find().pretty()

for (let i = 0; i <= 10000; i++) {
  db.herois.insert({
    nome: `clone=${i}`,
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
  })
}
db.herois.count()
db.herois.findAll()
db.herois.find(1000).sort({ nome: -1 })

//  * create
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})

//  * read 
db.herois.find()

//  * update 
db.herois.update({ _id: ObjectId("id do personagem") }, { nome: 'nome da att' })
db.herois.update({ _id: ObjectId("id do personagem") }, { $set: { nome: 'nome da att' } })

//  * delete 
db.herois.remove({ nome: 'Mulher Maravilha' })