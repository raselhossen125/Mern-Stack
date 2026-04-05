var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

app = express();
app.use(bodyParser.json());
// const upload = multer();
// app.use(upload.array());
app.use(express.static("public"));

app.post("/", function (req, res) {
    let firstname = req.query.firstName;
    let lastName = req.query.lastName;

    res.send("Hello " + firstname + " " + lastName);
});

app.post("/login", function (req, res) {
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);

    res.send(jsonString);
});

app.post("/register", function (req, res) {
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
})

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

// then create upload
var uploadInStorage = multer({ storage: storage }).single("myFile");

app.post("/upload", function (req, res) {
    uploadInStorage(req, res, function (error) {
        if (error) {
            res.send("File upload failed");
        } else {
            res.send("File upload success");
        }
    });
});

app.listen(8080, function(){
    console.log('Server run success');
});