var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: Date,
  endTime: Date,
  station: Number,
  grade: Number,
  imageURI: String,
  isNewActivity: Boolean,
  isOpen: Boolean,
  state: String
}, {timestamps: true});

// Requires population of author
<<<<<<< HEAD
ActivitySchema.methods.toJSONFor = function(){
=======
ActivitySchema.methods.toJSONFor = function(user){
>>>>>>> Renamed all events to activities, added new activites schema
  return {
    id: this._id,
    createdAt: this.createdAt,
    title: this.title,
    description: this.description,
    startTime: this.startTime,
    endTime: this.endTime,
    station: this.station,
    grade: this.grade,
    imageURI: this.imageURI,
    isNewActivity: this.isNewActivity,
    isOpen: this.isOpen,
    state: this.state
  };
};

module.exports = mongoose.model('Activity', ActivitySchema);
