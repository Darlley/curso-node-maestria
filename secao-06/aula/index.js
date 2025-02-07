const express = require('express')
const app = express()

const $_PORT = 3000

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})