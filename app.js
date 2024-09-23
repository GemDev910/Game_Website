const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const hbs = handlebars.create({});
hbs.handlebars.registerHelper('add', (a, b) => a + b)

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {
      title: "Home Page",
      message: "Howdy Handlebars",
  });
});

app.get('/characters', (req, res) => {
  const characters = "super"
  res.render('characters', {
    title: characters,
    message: "Characters"
  });
});

app.get('/news', (req, res) => {
  res.render('news', {
  });
});

app.get('/worlds', (req, res) => {
  res.render('worlds', {
  });
});



app.use((req, res) => {
  res.status(404).send('<h1>404, page not found</h1>')
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
