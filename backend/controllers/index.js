var express = require('express')
  , router = express.Router()

router.use('/faq', require('./faq'))

router.get('/', function(req, res) {
	res.send("bacon!");
})

module.exports = router
