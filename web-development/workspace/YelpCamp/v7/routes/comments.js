var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground")
var Comment = require("../models/comment")

//Comment new
router.get('/new', isLoggedIn,function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new', {campground:campground});
        }
    });
});

//comment create
router.post('/', isLoggedIn,function(req, res){
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
            });
        }
    });
    
});


//middle
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
module.exports = router;