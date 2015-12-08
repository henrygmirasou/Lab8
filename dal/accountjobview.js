var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('select concat(a.fname, " ", a.lname) as User_Name, ajv.name, ajv.description, a.account_id from accountJobView ajv join account a on a.account_id = ajv.account_id order by a.lname asc;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}