require('dotenv').config();
var mongoose = require('mongoose');
const URI = process.env.URI;
mongoose.connect(URI, {useNewUrlParser: true});

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;