const express = require('express')
const path = require('node:path')
const app = express()

const $_PORT = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})