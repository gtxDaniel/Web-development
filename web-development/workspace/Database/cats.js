var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// var george = new Cat({
//     name: 'Mrs. Norris',
//     age: 7,
//     temperament: 'Evil'
// });


// george.save(function(err, cat){
//     if(err){
//         console.log('something went wrond')
//     }else{
//         console.log('good');
//         console.log(cat);
//     }
// });

Cat.create({
    name:'Snow white',
    age: 12,
    temperament: 'bland'
}, function(err, cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});


Cat.find({}, function(err, cats){
    if(err){
        console.log('oh No');
        console.log(err);
    }else{
        console.log('all cats');
        console.log(cats);
    }
})

