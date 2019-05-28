var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
        {name: 'First', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg'},
        {name: 'Second', image: "https://ak4.picdn.net/shutterstock/videos/20733094/thumb/1.jpg"},
        {name: 'Third', image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"},
        {name: 'First', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg'},
        {name: 'Second', image: "https://ak4.picdn.net/shutterstock/videos/20733094/thumb/1.jpg"},
        {name: 'Third', image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"}
    ]

app.get('/', function(req, res){
    res.render('landing');
})

app.get('/campgrounds', function(req, res){

        res.render('campgrounds', {campgrounds: campgrounds});
})

app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs');
})

app.post('/campgrounds', function(req, res){
    // get data from form and add to campgorunds array
    // redircet
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect('/campgrounds');
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})