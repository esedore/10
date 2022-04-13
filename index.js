const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
require('dotenv').config();
const URI = process.env.URI;
var mongoose = require('mongoose');
const routes = require('./controllers/routes');
const express = require('express');
  app = express();
app.set(port);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
mongoose.connect(URI,{useUnifiedTopology: true});
const db = mongoose.connection;
const path = require('path');
const book = require('./model/book');
const bookController = require('./controllers/bookController')
const conn = require('./database.js');

app.set("view engine", "ejs");

app.get(
  "/home",
  bookController.getBook,
  (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
  }
);

const bookCollection = conn.collection('books');
console.log('Collection name: ', bookCollection.name);
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,"controllers")));
app.use(express.static(path.join(__dirname, 'node_modules')));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.render('index.js',{})
  res.send('');
});

app.use('/',routes);

app.listen(3000, () => {
    console.log('listening on port 3K');
});