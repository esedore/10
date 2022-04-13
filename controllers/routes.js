const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname+"views"));
app.use(express.static(__dirname+"model"));
app.use(express.static(__dirname+"public"));
app.use(express.static(__dirname+"controllers"));

router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'../views/home.html'));
})
router.get('/books/1',function(req,res){
    res.sendFile(path.join(__dirname,'../views/1.html'));
})
router.get('/books/2',function(req,res){
    res.sendFile(path.join(__dirname,'../views/2.html'));
})
router.get('/books/3',function(req,res){
    res.sendFile(path.join(__dirname,'../views/3.html'));
})
module.exports = router;

app.use('/',router);
