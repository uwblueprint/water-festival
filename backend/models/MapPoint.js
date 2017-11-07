var mongoose = require('mongoose');

var MapPointSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
}, {timestamps: true});

// Requires population of author
MapPointSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    createdAt: this.createdAt,
    x: this.x,
    y: this.y,
    event: this.event
  };
};

mongoose.model('MapPoint', MapPointSchema);
