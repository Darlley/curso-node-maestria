const express = require('express')
const path = require('node:path')
const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

const $_PORT = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(`Estamos buscando pelo user ID: ${id}`)
  res.sendFile(`${basePath}/users.html`)
})


app.post('/users/save', (req, res) => {
  const { name, age } = req.body
  console.log(`O usuário ${name}, ${age} anos, foi adicionado.`)
  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})