var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });

//Post
var Post = require("./models/post");


//user - email, name

var User = require("./models/user");

// User.create({
//     email:'bob@gmail.com',
//     name:'Bobn'
// })

Post.create({
    title:'how to cook burger_3',
    content:'blah balal nlasfsdfaas'
}, function(err, post){
    User.findOne({email:'bob@gmail.com'}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            })
        }
    })
})

//Find user and posts
// User.findOne({email:'bob@gmail.com'}).populate('posts').exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// })