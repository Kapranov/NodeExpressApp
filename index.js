var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Getting Started with Node.js & Express.js!')
});

var server = app.listen(4200, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
