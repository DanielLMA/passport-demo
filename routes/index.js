var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Passport Demo', user: req.user });
});

router.get('/dashboard', function (req, res, next) {
  res.json(req.user)
});

router.get('/foo', function (req, res, next) {
  res.send('<h3>Anyone with "user" role can get here, but guests cannot!</h3>')
});

module.exports = router;
