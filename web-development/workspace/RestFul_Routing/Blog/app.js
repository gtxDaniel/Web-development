var express = require("express"),
methodOverride = require("method-override"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//     title:'TestImage',
//     image: 'https://thefinanser.com/wp-content/uploads/2019/03/Camp.jpg',
//     body:'Hello this is a test'
// })

app.get('/', function(req, res) {
    res.redirect('/blogs');
});


//NEW ROUTE
app.get('/blogs/new', function(req, res) {
    res.render('new');
})

// CREATE ROUTE
app.post('/blogs', function(req, res){
    //CREATE BLOG
    //REDICT TO THE INDEX
    
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render('new');
        }else{
            res.redirect('/blogs');
            // console.log(newBlog);
            // console.log(req.body.blog);
        }
    })
});

//show
app.get('/blogs/:id', function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blogs');
        }else{
            res.render('show', {blog: foundBlog});
        }
    })
});


app.get('/blogs', function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render('index', {blogs: blogs});
        }
    })
});


//Edit
app.get('/blogs/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blog');
        }else{
            res.render('edit', {blog: foundBlog});
        }
    })
});

//Update
app.put('/blogs/:id', function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
        if(err){
            res.redirect('/blogs');
        }else{
            res.redirect('/blogs/' + req.params.id);
        }
    })
});

//delete

app.delete('/blogs/:id',function(req, res){
    //destory 
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/blogs');
        }else{
            res.redirect('/blogs');
        }
    })
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
})
