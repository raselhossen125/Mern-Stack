var express = require('express');

app = express();

app.get('/', function(req, res) {
    res.end("Hello World!");
})

app.listen(8080, function(){
    console.log('Server run success');
});