
var express = require('express');
const CoffeeScript = require("coffeescript");
var app = express();

app.set('view engine', 'pug')

//template for home page
app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'You are now at the avocado toast world' })
})


app.get('/tutorial', function (req, res) {
    res.render('tutorial1', { name: 'Avocado', desc: 'Hello there! Its me, your Avocado! You can make a toast with me.' })
})

app.get('/tutorialSecond', function (req, res) {
    res.render('tutorial2', { })
})

//with db
app.get('/getUsers', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDB'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});