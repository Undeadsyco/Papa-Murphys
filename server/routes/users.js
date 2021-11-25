var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login', (req, res, next) => {
  let pin = req.body.pin;
  let id = pin.substr(0,4);
  let password = pin.substr(4);

  models.employee.findOne({
    where: { User_Id: id }
  }).then(user => {
    if(user){
      if(parseInt(user.Password) === parseInt(password)){
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify({status: true, user: user}))
      } else {
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify({status: false, message: 'Incorrect Password'}))
      }
    } else {
      res.header('Content-Type', 'application/json')
      res.send(JSON.stringify({status: false, message: 'Incorrect User'}))
    }
  })
})

module.exports = router;
