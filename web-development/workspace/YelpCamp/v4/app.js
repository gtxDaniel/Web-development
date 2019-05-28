var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var seedDB = require("./seeds");

seedDB();

mongoose.connect('mongodb://localhost:27017/yelp_camp_v4', { useNewUrlParser: true });

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
            res.render('campgrounds/index', {campgrounds: allCampgrounds});
    }
})
        // res.render('campgrounds', {campgrounds: campgrounds});
})

app.get('/campgrounds/new', function(req, res) {
    res.render('campgorunds/new');
})

app.get('/campgrounds/:id', function(req, res) {
    //FIND THE CAMPGROUND WITH ID
    Campground.findById(req.params.id).populate('comments').exec( function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/show', {campground: foundCampground});
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
    
});

//=========================
//rounts
//=========================

app.get('/campgrounds/:id/comments/new', function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new', {campground:campground});
        }
    })
});

app.post('/campgrounds/:id/comments', function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
        console.log('here we are');
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    console.log('thiwhfhfsakh');
                    console.log(campground._id);
                    campground.comments.push(comment);
                    campground.save();

                    res.redirect('/campgrounds/' + campground._id);
                }
            })
        }
    })
    //create new comment
    //connect new comment to campground
    //redirect campground show page
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})