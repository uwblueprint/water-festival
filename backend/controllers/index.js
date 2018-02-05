var express = require('express')
  , router = express.Router()

router.use('/faq', require('./faq'))
router.use('/activities', require('./Activities'))

router.get('/', function(req, res) {
	res.send("bacon!");
})

module.exports = router
