const express = require('express')
const path = require('node:path')

const app = express()
const usersRouter = require('./users')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())
app.use('/users', usersRouter)

const $_PORT = 3000

// estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen($_PORT, () => {
  console.log(`App running in http://localhost:${$_PORT}`)
})