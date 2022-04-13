const Book = require('../model/book');

exports.getBook = (req, res, next)=>{
    Book.find({}, (error, books)=>{
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.book1 = (req, res, next)=>{
    Book.findOne({book:"The Way of Kings"}, (error, books)=>{
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.book2 = (req, res, next)=>{
    Book.findOne({book:"The Sandman: Preludes & Nocturnes"}, (error, books)=>{
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.book3 = (req, res, next)=>{
    Book.findOne({book:"Neuromancer"}, (error, books)=>{
        if (error) next(error);
        req.data = books;
        next();
    });
};