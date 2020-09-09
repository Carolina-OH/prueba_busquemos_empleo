var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* Post user  */
router.post('/', function(req, res, next) { 
  userController.user_create(req, res, next);
});
module.exports = router;
