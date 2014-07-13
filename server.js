var express = require('express');

var app = express();

// Serve static files
app.use('/', express.static(__dirname + '/'));

// Serve application API

app.listen(8000);

console.log('Listening on port 8000...');