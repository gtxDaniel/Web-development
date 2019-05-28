var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send('Hi there, this is 404');
});

app.get('/speak/:animal', function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        cow: 'moo',
        pig: 'oink',
        dog: 'woof',
        cat: 'I hate human',
        godfish: '...'
    }
    var sound = sounds[animal];
    res.send('The ' + animal + " says '" + sound + "'");
});

app.get('/repeat/:message/:times', function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var text = ''
    for(var i = 0; i < times; i++){
        text += message + ' ';
    }
    res.send(text);
});

app.get('*', function(req, res) {
    res.send('sorry, what the fox say?');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Now serving your app');
});
