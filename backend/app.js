const express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

require('dotenv').config();

const app = express();

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds249605.mlab.com:49605/water_festival`, {
	useMongoClient: true,
});

app.use(require('./controllers'));

app.listen(9090, function () {
  // eslint-disable-next-line no-console
  console.log('Backend server is listening on port 9090!')
});
