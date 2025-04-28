const express = require('express');
const exphbs = require('express-handlebars');


const port = 3000;
const auth = true

const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  res.render('home', { auth });
});

app.get('/dashboard', (req, res) => {
  const user = {
    name: "Darlley 2"
  }

  res.render('dashboard', { user, auth });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;