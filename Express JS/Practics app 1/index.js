var express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("Home page");
});

app.post("/about", function (req, res) {
    res.status(201).end('Created successfully.');
});

app.get("/user", function (req, res) {
    let user = [
        {
            "id": 1,
            "name": "Rasel Hossen",
            "email": "rasel@example.com",
            "occupation": "Android Developer"
        },
        {
            "id": 2,
            "name": "Amina Rahman",
            "email": "amina@example.com",
            "occupation": "UI/UX Designer"
        },
        {
            "id": 3,
            "name": "Tanvir Ahmed",
            "email": "tanvir@example.com",
            "occupation": "Backend Developer"
        },
        {
            "id": 4,
            "name": "Nusrat Jahan",
            "email": "nusrat@example.com",
            "occupation": "Project Manager"
        },
        {
            "id": 5,
            "name": "Sakib Hasan",
            "email": "sakib@example.com",
            "occupation": "QA Engineer"
        }
    ];
    res.json(user);
});

app.get("/download", function (req, res) {
    res.download('./uploads/image.png');
});

app.get("/bangladesh", function (req, res) {
    res.redirect("http://localhost:8080/pakistan")
});

app.get("/pakistan", function (req, res) {
    res.send("This is pakistan");
});

app.post("/createUser", function (req, res) {
    let user = {
        "success": true,
        "message": "User registered successfully",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.token",
        "data": {
            "id": 101,
            "name": "Rasel Hossen",
            "email": "rasel@example.com",
            "occupation": "Android Developer",
            "created_at": "2026-03-31T10:30:00Z"
        }
    };
    res.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.token");
    res.status(201).json(user);
});

app.get("/cookie", function (req, res) {
    res.cookie("name", 'MD Rasel Hossen');
    res.cookie("age", '26');
    res.end('Cookie set success');
});

app.get("/clearCookie", function (req, res) {
    res.clearCookie("name");
    res.clearCookie("age");
    res.end('Cookie clear success');
});

app.listen(8080, function(){
    console.log('Server run success');
});