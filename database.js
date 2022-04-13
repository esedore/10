const dotenv = require('dotenv');
dotenv.config()
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vbnij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;