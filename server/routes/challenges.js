var express = require('express');
var router = express.Router();
const challenge_controller = require("../controller/challengeController");

/* GET challenges listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// GET request: get one challenge by challenge id.
router.get("/:id", challenge_controller.challenge_detail);

module.exports = router;