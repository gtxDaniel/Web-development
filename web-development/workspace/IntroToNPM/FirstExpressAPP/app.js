var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send('hi there');
});

app.get('/bye', function(req, res) {
    // body...
    res.send('goodbye');
})

app.get('*', function(req, res) {
    res.send('404 not found');
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('sever started')
});