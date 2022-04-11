const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const routes = require('./controllers/routes.js');
const express = require('express');
const path = require('path');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://esedore:88eric88@cluster0.vbnij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const db = client.db("SRT621").collection("books");
  db.listCollections().toArray().then((docs) => {
      console.log('Available collections:');
      docs.forEach((doc, idx, array) => { console.log(doc.name) });

  }).catch((err) => {

      console.log(err);
  }).finally(() => {

      client.close();
  });
});

app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname+"controllers")));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('');
});

app.use('/',routes);

app.listen(3000, () => {
    console.log('listening on port 3K');
});