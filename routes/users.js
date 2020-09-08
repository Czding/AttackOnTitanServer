var express = require('express')
var router = express.Router()

let name = '123123123'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getName', function(req, res, next) {
  res.send(name)
})

router.post('/saveName', function(req, res, next) {
  name = req.body.name
  res.send('success')
})

module.exports = router;
