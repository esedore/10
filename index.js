const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const dotenv = require('dotenv');
const routes = require('./controllers/routes.js');
const express = require('express');
const path = require('path');
const app = express();
const {Book} = require('./model/book');
app.set("view engine", "ejs");

let dbBook1 =  Book.findOne({book:"Neuromancer"}).exec();
let dbBook2 =  Book.findOne({book:"The Way of Kings"}).exec();
let dbBook3 =  Book.findOne({book:"The Sandman: Preludes & Nocturnes"}).exec();
console.log(dbBook1, dbBook2, dbBook3);
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,"controllers")));
app.use(express.static(path.join(__dirname, 'node_modules')));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.render('index.ejs',{})
  res.send('');
});

app.use('/',routes);

app.listen(3000, () => {
    console.log('listening on port 3K');
});