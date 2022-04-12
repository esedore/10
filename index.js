const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const routes = require('./controllers/routes.js');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
var mongodb = "mongodb+srv://esedore:88eric88@cluster0.vbnij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(mongodb, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const db = client.db("SRT621");
  let collection = db.collection("books");
  let b1Query = {book:'Neuromancer'}
  let b2Query = {book:'The Way of Kings'}
  let b3Query = {book:'The Sandman: Preludes & Nocturnes'}
collection.findOne(b1Query).then(book1 => {
  console.log(book1);
}).catch((err) => {
  console.log(err);
})
collection.findOne(b2Query).then(book2 => {
  console.log(book2);
}).catch((err) => {
  console.log(err);
})
collection.findOne(b3Query).then(book3 => {
  console.log(book3);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  client.close();
});
});

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,"controllers")));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('');
});

app.use('/',routes);

app.listen(3000, () => {
    console.log('listening on port 3K');
});