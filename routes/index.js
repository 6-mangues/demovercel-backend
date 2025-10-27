var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year',function(req,res){
  const year = new Date().getFullYear();
  res.json({year:year.toString()});
})

module.exports = router;
