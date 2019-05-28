var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")


//Index show all campgrounds
router.get('/', function(req, res){
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/index', {campgrounds: allCampgrounds});
    }
})
        // res.render('campgrounds', {campgrounds: campgrounds});
})

//NEW -show form to create new campground
router.get('/new', isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
})

//SHOW -show more info about one campground
router.get('/:id', function(req, res) {
    //FIND THE CAMPGROUND WITH ID
    Campground.findById(req.params.id).populate('comments').exec( function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });

});

//CREATE add new campground to DB
router.post('/',isLoggedIn, function(req, res){
    // get data from form and add to campgorunds array
    // redircet
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var newCampground = {name: name, image: image, description: desc, author: author};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            console.log(newlyCreated);
            res.redirect('/campgrounds');
        }
    });
    
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
module.exports = router;
