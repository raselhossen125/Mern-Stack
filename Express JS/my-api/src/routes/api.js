const express = require("express");
const hello_controller = require("../controllers/hello_controller");
const router = express.Router();

router.get("/hello-get", hello_controller.helloGet);
router.post("/hello-post", hello_controller.helloPost);

module.exports = router;