var express = require('express')
var request = require('request');
var app = express();
var port = (process.env.PORT || 3000);



// serve anything in /public directly, ie http://xxxxx.xxxxx.xxx/layout-scamp.html
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// serve layout 12 as the base index file
app.get('', function(request, response) {
    response.sendfile('./public/index.html');
});
app.get('/', function(request, response) {
    response.sendfile('./public/index.html');
});


// ----------------------------------------------------------------------------

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});