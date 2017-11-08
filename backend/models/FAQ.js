var mongoose = require('mongoose');

var FAQSchema = new mongoose.Schema({
  question: String,
  answer: String
}, {timestamps: true});

// Requires population of author
FAQSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    createdAt: this.createdAt,
    question: this.question,
    answer: this.answer
  };
};

mongoose.model('FAQ', FAQSchema);
