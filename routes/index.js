var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Passport Demo', user: req.user });
});

router.get('/foo', function (req, res, next) {
  res.json(req.user)
});


module.exports = router;
