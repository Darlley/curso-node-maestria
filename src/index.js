const express = require('express')
const {engine} = require('express-handlebars')

const app = express()
const conn = require('./db/conn')
const taskRoutes = require('./routes/tasksRoutes')

const path = require('path')

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', taskRoutes)

conn.sync().then(() => {
  app.listen(3000, () => {
    console.log(`App listent on localhost:3000`)
  })
}).catch((err) => console.log(err))
