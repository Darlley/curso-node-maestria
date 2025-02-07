const express = require('express')
const path = require('node:path')
const app = express()

const $_PORT = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(`Estamos buscando pelo user ID: ${id}`)
  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})