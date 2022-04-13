const book = require('../model/book');

exports.getBook = (req, res, next)=>{
    book.find({}, (error, book)=>{
        if (error) next(error);
        req.data = book;
        next();
    });
};