const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const faqRouter = express.Router()

var mongodb = require('mongodb');
var Faq = require('../models/FAQ');

faqRouter.use(cors())
faqRouter.use(bodyParser.json());
faqRouter.use(bodyParser.urlencoded({
  extended: true
}));

faqRouter.get('/list', function(req, res) {
	Faq.find(function(err, faqs) {
		if (err) {
			res.json(err);
		}
		faqs = faqs.map(q => q.toJSONFor());
		res.json(faqs);
	});
})

faqRouter.delete('/delete', function(req, res) {
	var ids = req.body.questionIds.map(function(id) {
		return new mongodb.ObjectID(id); 	
	});

	Faq.deleteMany({_id: {$in: ids}}, function(err) {
		if (err) {
			res.send(err);
		}
	});
	res.send("Deleted questions!");
})

faqRouter.post('/insert', function(req, res) {
	var faq = new Faq();
	console.log(JSON.stringify(req.body));
	faq.question = req.body.question;
	faq.answer = req.body.answer;

	faq.save(function(err) {
		res.json({ message: 'Question created!',
					  question: faq,
					  request: req.body });
	});
});

faqRouter.post('/edit', function(req, res) {
	var questionToEdit = req.body;

	Faq.findById(questionToEdit.id, function(err, faq) {
		faq.set({
			question: questionToEdit.question,
			answer: questionToEdit.answer
		});
		faq.save(function(err, updatedFaq) {
			if (err) return err.message;

			res.send(updatedFaq);
		});
	});
});

module.exports = faqRouter;
