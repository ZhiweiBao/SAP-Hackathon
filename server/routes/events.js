var express = require('express');
var router = express.Router();
const event_controller = require("../controller/eventController");

/* GET events listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// GET request: get one event by event id.
router.get("/:id", event_controller.event_detail);

module.exports = router;