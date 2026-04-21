exports.helloGet = function (req, res) {
    res.status(200).json({
        status: "success",
        data: "This is hello get api"
    });
}

exports.helloPost = function (req, res) {
    res.status(201).json({
        status: "success",
        data: "This is hello post api"
    });
}