const port = 3000;
require('dotenv').config();
const URI = process.env.URI;
const mongoose = require('mongoose');
const routes = require('./controllers/routes');
const path = require('path');
const Book = require('./model/book');
const bookController = require('./controllers/bookController')
const conn = require('./database.js');
const express = require('express'),
  app = express();
app.set(port);
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");

app.use(express.json());
mongoose.connect(URI,{useUnifiedTopology: true});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Mongoose Connected");
})
app.get("/home",
  bookController.getBook,
  (req, res, next) => {
    console.log(req.data);
    res.render("book",{books:req.data});
});

app.get("/books/1",
  bookController.book1,
  (req, res, next) => {
    console.log(req.data);
    res.render("book1",{book1:req.data});
});

app.get("/books/2",
  bookController.book2,
  (req, res, next) => {
    console.log(req.data);
    res.render("book2",{book2:req.data});
});

app.get("/books/3", 
  bookController.book3,
  (req, res, next) => {
    console.log(req.data);
    res.render("book3",{book3:req.data});
});
app.listen(3000, () => {
  console.log('listening on port 3K');
});
