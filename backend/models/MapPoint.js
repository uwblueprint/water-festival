var mongoose = require('mongoose');

var MapPointSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
}, {timestamps: true});

// Requires population of author
MapPointSchema.methods.toJSONFor = function() {
  return {
    id: this._id,
    createdAt: this.createdAt,
    x: this.x,
    y: this.y,
    activity: this.activity
  };
};

module.exports = mongoose.model('MapPoint', MapPointSchema);
