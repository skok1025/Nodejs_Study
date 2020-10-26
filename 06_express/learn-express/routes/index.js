var express = require('express');
var router = express.Router();
var mariadbConn = require('../config/mariaConn');

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' });

  mariadbConn.query('select * from test_user', function (err, rows, fields) {
    mariadbConn.end();
    if (!err) {
      console.log(rows);
      console.log(fields);
      var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
        'fields : ' + JSON.stringify(fields);
      res.send(result);
    } else {
      console.log('query error : ' + err);
      res.send(err);
    }
  });

});

module.exports = router;
