const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const faqRouter = express.Router()

var Faq = require('../models/FAQ');

faqRouter.use(cors())
faqRouter.use(bodyParser.json());
faqRouter.use(bodyParser.urlencoded({
  extended: true
}));

function getCurrentQuestions() {
	var questions;
	Faq.find(function(err, faqs) {
		if (err) {
			questions = err;
			return;
		}
		questions = faqs;
	});
	return questions;
}

faqRouter.get('/questions', function(req, res) {
	Faq.find(function(err, faqs) {
		if (err) {
			res.send(err);
		}
		res.json(faqs);
	});
})

faqRouter.get('/deleteAll', function(req, res) {
	Faq.remove({}, function(err) {
		if (err) {
			res.send(err);
		}
		res.send('Deleted all your questions!');
	});
})

faqRouter.post('/question', function(req, res) {
	var faq = new Faq();
	console.log(JSON.stringify(req.body));
	faq.question = req.body.question;
	faq.answer = req.body.answer;

	faq.save(function(err) {
		res.json({ message: 'Question created!',
					  question: faq.question,
		 			  answer: faq.answer,
					  request: req.body });
	});
});

faqRouter.post('/', function (req, res) {
  if(req.body.address){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(search.search(req.body.address)));
  }else{
    res.send("{}") 
  }
})

module.exports = faqRouter;
