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
  //select  -> ver
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
  }
}
