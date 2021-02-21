var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    console.log(req);

    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><html lang={lang} /><body><p>This is home Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/allAvocados") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><html lang={lang} /><body><p>This is an avocados page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><html lang={lang} /><body><p>This is admin Page.</p></body></html>');
        res.end();

        //add JSON response
    } else if (req.url == '/avocadoInfo') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.write(JSON.stringify({ message: "Avocado Toast" }));
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')