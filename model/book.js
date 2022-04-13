var mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    book:{
        type: 'string',
        required: true
    },
    author:{
        type: 'string',
        required: true
    },
    amazon:{
        type: 'string',
        required: true
    }
});
module.exports = mongoose.model("book",bookSchema);