var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")
var middleware = require("../middleware");


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
router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
})

//SHOW -show more info about one campground
router.get('/:id', function(req, res) {
    //FIND THE CAMPGROUND WITH ID
    Campground.findById(req.params.id).populate('comments').exec( function(err, foundCampground){
        if(err  || !foundCampground){
            req.flash('error', 'Campground not found');
            res.redirect('back')
        }else{
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });

});

//CREATE add new campground to DB
router.post('/',middleware.isLoggedIn, function(req, res){
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


//EDIT campground route
router.get('/:id/edit', middleware.checkCampgroundOwnership,function(req, res) {
    //is user logged in
    Campground.findById(req.params.id, function(err, foundCampground){
              res.render('campgrounds/edit', {campground: foundCampground}); 
      

      //other reirect
    }) 
})


//UPDATE 
router.put('/:id', function(req, res){
    //find and update the correct canpround
    
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect('/campgrounds');
        }else{
            console.log(req.params.id)
            res.redirect('/campgrounds/' + req.params.id); 
        }
    })
    //redirect somewhere
})

//Destroy campground route
router.delete('/:id', function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/campgrounds');
        }else{
            res.redirect('/campgrounds');
        }
    })
})


module.exports = router;