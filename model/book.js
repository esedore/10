const mongoose = require('mongoose'),
    bookSchema = mongoose.Schema({
        book: String,
        author: String,
        amazon: String,
    });
module.exports = mongoose.model("Book",bookSchema);