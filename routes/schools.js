var express = require('express');
var router = express.Router();
var schoolDal = require('../dal/school');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/create', function(req, res, next) {
    res.render('schoolFormCreate.ejs',{ subtitle: 'Express' });
});

router.get('/save', function(req, res, next) {
    console.log("School name equals: " + req.query.schoolname);
    console.log("City submitted was: " + req.query.city);

    schoolDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});

module.exports = router;