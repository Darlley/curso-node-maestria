const express = require('express')
const app = express()

const $_PORT = 3000

const checkAuthMiddleware = function(req, res, next) {
  req.authStatus = true
  if(req.authStatus){
    console.log('esta logado')
    next()
  } else {
    console.log("Não esta logado, faça o login para continuar")
    next()
  }
}

app.use(checkAuthMiddleware)

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})