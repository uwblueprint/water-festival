var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  eventTime: Date,
  location: String,
  imageURI: String
}, {timestamps: true});

// Requires population of author
EventSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    createdAt: this.createdAt,
    title: this.title,
    description: this.description,
    location: this.location,
    imageURI: this.imageURI
  };
};

mongoose.model('Event', EventSchema);
