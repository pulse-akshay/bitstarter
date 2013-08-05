var express = require('express');
var fs = require('fs');

//read the fild and get the strings
var buffer = fs.readFileSync('index.html');


var text = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.setHeader('Content-Type', 'text/html');

  response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
