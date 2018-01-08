const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://water_festival:uwblueprintwaterfestival@ds249605.mlab.com:49605/water_festival', {
	useMongoClient: true,
});

app.use(require('./controllers'));

app.listen(9090, function () {
  console.log('Backend server is listening on port 9090!')
});
