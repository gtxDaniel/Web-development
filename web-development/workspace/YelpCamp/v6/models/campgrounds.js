var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
          {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Comment"
          }
       ]
});

//this will automatically create a collections called campgrounds
var Campground = mongoose.model('Campground', campgroundSchema);
module.exports = Campground;
