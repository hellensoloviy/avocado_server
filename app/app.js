var fs = require('fs');

var express = require('express');

fs.readFile('test.txt', 'utf8', function (err, data) {

    debugger;

    if (err) throw err;

    console.log(data);
});



//// ------- Express Server ------------
// define routes here..
var app = express();

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World, its me, your favourite Avocado!</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

//listen to requests
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});