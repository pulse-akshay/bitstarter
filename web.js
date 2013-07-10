var express = require('express');
var fs = require('fs');

//read the fild and get the strings
var buffer = fs.readFileSync(./index.html);
var text = buffer.toString("utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
