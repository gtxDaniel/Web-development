var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");



mongoose.connect('mongodb://localhost:27017/yelp_camp_v6', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
seedDB();


//passport configuration
app.use(require("express-session")({
    secret:'Once again you win',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req,res, next){
    res.locals.currentUser = req.user;
    next();
})
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

app.get('/campgrounds/:id/comments/new', isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new', {campground:campground});
        }
    })
});

app.post('/campgrounds/:id/comments', isLoggedIn, function(req, res){
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
    
});

//====================
//AUTH ROUTES

//show register form
app.get('/register', function(req, res) {
    res.render('register');
});

//handle sign up
app.post('/register', function(req, res) {
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req,res, function(){
            res.redirect('/campgrounds')
        })
    });
})



//show login form
app.get('/login', function(req, res) {
    res.render('login');
})

app.post('/login', passport.authenticate('local',
    {   successRedirect:'/campgrounds',
        failureRedirect:'/login'
        
    }), function(req, res) {
})

//logout route
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/campgrounds');
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next;
    }
    res.redirect('/login');
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})