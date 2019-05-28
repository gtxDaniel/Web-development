var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/friends', function(req, res){
    var friends = ['JIAWEN', 'TONY', 'TOM', 'LILY'];
    res.render('friends', {friends: friends});
});

app.post('/addfriend', function(req, res){
    res.send('You have post');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('start');
});