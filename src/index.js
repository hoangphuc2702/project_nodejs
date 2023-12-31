const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  
  res.render ('register');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})