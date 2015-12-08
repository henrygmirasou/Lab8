var express = require('express');
var router = express.Router();
var accountjobviewDal   = require('../dal/accountjobview');

router.get('/all', function(req, res) {
    accountjobviewDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllAccountjobview.ejs', {rs: result});
        }
    );
});

module.exports = router;