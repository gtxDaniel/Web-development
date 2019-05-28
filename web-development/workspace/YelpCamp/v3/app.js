var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
// var Comment = require("./models/comment");
var seedDB = require("./seeds");

seedDB();

mongoose.connect('mongodb://localhost:27017/yelp_camp_v3', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//schema set up


app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('index', {campgrounds: allCampgrounds});
    }
})
        // res.render('campgrounds', {campgrounds: campgrounds});
})

app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs');
})

app.get('/campgrounds/:id', function(req, res) {
    //FIND THE CAMPGROUND WITH ID
    Campground.findById(req.params.id).populate('comments').exec( function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render('show', {campground: foundCampground});
        }
    });

})

app.post('/campgrounds', function(req, res){
    // get data from form and add to campgorunds array
    // redircet
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect('/campgrounds');
        }
    })
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})