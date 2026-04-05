var http = require('http');
var URL = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.writeFile('demo.txt', 'Hello World', function (err) {
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File write failed.');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File write success.');
                res.end();
            }
        });
    } else if (req.url === '/write') {
        fs.readFile('home.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

});

server.listen(8080);
console.log('Server run success');