const mongoose = require('mongoose'),
    Book = mongoose.Schema({
        book: String,
        author: String,
        amazon: String
    });
module.exports.Book = mongoose.model("Book",book);
module.exports.db = mongoose;