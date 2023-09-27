const mongoose = require("mongoose");

//definir metodo:
const Usuario = mongoose.model('User');

// todo Insert

module.exports = {

  //create -> criando
  async insert(req, res) {
    const usuario = await Usuario.create(req.body);
    return res.json(usuario);
  },
  //Read  = select  -> ver
  async select(req, res) {
    const { page } = req.query;

    // page vai ser valor da pagina:
    // limit quanto que vai de dados q serão exibido
    const usuarios = await Usuario.paginate({}, { page, limit: 5 });

    return res.json(usuarios);
  },
  //metodo para selecionar qual mostrar :
  async findUser(req, res) {
    const usuarios = await Usuario.findById(req.params.id);
    // utiliza find para buscar junto com params req.params.id
    return res.json(usuarios);
  },
  // metodo update
  async update(req, res) {

    // vai buscar o Id para atualizar
    const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // passo req.body com novo dados
    // {new:true} ele vai atualizar automaticamente

    return res.json(usuarios)
  },
  async deletarUser(req, res) {
    //vai busca nosso registro no Db
    await Usuario.findByIdAndRemove(req.params.id);
    return res.send();
  }


}
