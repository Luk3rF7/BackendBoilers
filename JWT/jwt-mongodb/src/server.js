const mongoConnection = require('./database/mongodb/mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const port = process.env.PORT || 3005


const User = require('./model/schema_user')

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado ' })
  }
  try {
    const secret = process.env.SECRET

    jwt.verify(token, secret)
  } catch (error) {
    console.error(error)

    res.status(400).json({ msg: 'Token invalido!' })
  }
}
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Conectado com api' })
})
// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id

  // check usuario existe 
  const user = await User.findNyId(id, '-password')

  if (!user) { return res.status(404).json({ msg: "Usuário não encontrado!" }) }
  res.status(200).json({ user });

})

// Route register
app.use(express.json())

app.post('/auth/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body

  // validações 

  if (!name) {
    return res.status(422).json({ msg: "Nome e obrigatorio" })
  }
  if (!email) {
    return res.status(422).json({ msg: "E-mail e obrigatorio" })
  }
  if (!password) {
    return res.status(422).json({ msg: "password e obrigatorio" })
  }
  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "as senha não batem favor verificar!" })
  }

  //checa se ja existe usuario:
  const userExistent = await User.findOne({ email: email })

  if (userExistent) {
    return res.status(422).json({ msg: "Porfavor utilize outro E-mail!" })
  }

  //create password 
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  //criando usuario :
  const user = new User({
    name, email, password: passwordHash
  })

  // utilizando trycatch
  try {
    await user.save()
    res.status(201).json({ msg: 'usuario criado com sucesso!' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Aconteceu erro no servidor !'
    })
  }
})

//  autenticate user :
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body
  //validation
  if (!password) {
    return res.status(422).json({ msg: "senha obrigatorio" })
  }
  if (!email) {
    return res.status(422).json({ msg: "E-mail e obrigatorio" })
  }
  //verificando se tem usuario:
  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(422).json({ msg: "usuario não encontrado" })
  }
  //checando password do bd
  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return res.status(422).json({ msg: "senha invalida" })
  }

  try {
    const secret = process.env.SECRET
    const token = jwt.sign({
      id: user._id
    }, secret)

    res.send(200).json({ msg: 'authenticação realizada com sucesso!', token })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      msg: 'Error no servidor '
    })
  }
})
const initApp = app.listen(port, () => {
  console.log(`servidor rodando porta : http://localhost:${port}`)
})
module.exports = initApp

