var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true });

//Post

var postSchema = new mongoose.Schema({
    title:String,
    content: String
})
var Post = mongoose.model('Post', postSchema)


//user - email, name
var userSchema = new mongoose.Schema({
    email:String,
    name: String,
    posts:[postSchema]
})


var User = mongoose.model('User', userSchema);

var newUser = new User({
    name:'Jack',
    email:'jack@browm.edu'
});

newUser.posts.push({
    title:'how to be strong',
    content:'just kidding'
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});

// var newPost = new Post({
//     title:'reflections on apple',
//     content:'They are dangerous'
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

User.findOne({name:'Jack'}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title:'3 Things to hate',
            content:'voldm codingd'
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        })
    }
})
