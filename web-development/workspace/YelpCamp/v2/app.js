var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//schema set up
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//this will automatically create a collections called campgrounds
var Campground = mongoose.model('Campground', campgroundSchema);


// Campground.create(
//     {name: 'first',
//     image: "https://ak4.picdn.net/shutterstock/videos/20733094/thumb/1.jpg",
//     description: 'This is a huge camp with no water and no bedroom'
    
//     },function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Newly created Campground');
//             console.log(campground);
//         }
//     })
    


// var campgrounds = [
//         {name: 'First', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg'},
//         {name: 'Second', image: "https://ak4.picdn.net/shutterstock/videos/20733094/thumb/1.jpg"},
//         {name: 'Third', image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"},
//         {name: 'First', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg'},
//         {name: 'Second', image: "https://ak4.picdn.net/shutterstock/videos/20733094/thumb/1.jpg"},
//         {name: 'Third', image: "https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg"}
//     ]

app.get('/', function(req, res){
    res.render('landing');
})

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('index', {campgrounds: allCampgrounds})
    }
})
        // res.render('campgrounds', {campgrounds: campgrounds});
})

app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs');
})

app.get('/campgrounds/:id', function(req, res) {
    //FIND THE CAMPGROUND WITH ID
    Campground.findById(req.params.id, function(err, foundCampground){
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