var express = require('express');
var router = express.Router();
var companygpaviewDal   = require('../dal/companygpaview');

router.get('/all', function(req, res) {
    companygpaviewDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllCompanygpaview.ejs', {rs: result});
        }
    );
});

module.exports = router;