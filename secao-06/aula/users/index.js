const express = require("express")
const path = require('node:path')

const router = express.Router()
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(`Estamos buscando pelo user ID: ${id}`)
  res.sendFile(`${basePath}/users.html`)
})

router.post('/save', (req, res) => {
  const { name, age } = req.body
  console.log(`O usuário ${name}, ${age} anos, foi adicionado.`)
  res.sendFile(`${basePath}/users.html`)
})

module.exports = router