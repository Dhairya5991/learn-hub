const mongoose = require("mongoose");
module.exports = mongoose.model("Course", new mongoose.Schema({
  title:String,
  description:String,
  lessons:[{title:String,videoUrl:String}]
}));