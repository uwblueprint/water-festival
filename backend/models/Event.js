var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: Date,
  endTime: Date,
  location: String,
  grade: Number,
  imageURI: String
}, {timestamps: true});

// Requires population of author
EventSchema.methods.toJSONFor = function() {
  return {
    id: this._id,
    createdAt: this.createdAt,
    title: this.title,
    description: this.description,
    startTime: this.startTime,
    endTime: this.endTime,
    location: this.location,
    grade: this.grade,
    imageURI: this.imageURI
  };
};

module.exports = mongoose.model('Event', EventSchema);
