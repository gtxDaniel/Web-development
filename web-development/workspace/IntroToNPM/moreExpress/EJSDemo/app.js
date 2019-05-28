var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love.ejs',{theThing: thing});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('start');
});
