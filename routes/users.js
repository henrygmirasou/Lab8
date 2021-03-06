var express = require('express');
var router = express.Router();
var accountDal = require('../dal/account');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/create', function(req, res, next) {
  res.render('userFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("firstname equals: " + req.query.firstname);
    console.log("the lastname submitted was: " + req.query.lastname);
    console.log("the email submitted was:" + req.query.email);
    console.log("the password for this user is:" + req.query.password);

    accountDal.Insert(req.query, function(err, result){
          if (err) {
            res.send(err);
          }
          else {
            res.send("Successfully saved the data.");
          }
        });
  });

module.exports = router;
