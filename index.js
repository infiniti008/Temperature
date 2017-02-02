var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000, function () {
  console.log('Server run on port 3000');
});
app.get('/',function (req, res) {
  var file = fs.readFileSync('./views/home.html').toString();
  res.end(file);
})
