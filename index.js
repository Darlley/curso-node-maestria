const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const auth = true

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