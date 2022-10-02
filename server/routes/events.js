var express = require('express');
var router = express.Router();
const event_controller = require("../controller/eventController");

/* GET events listing. */
router.get('/', event_controller.event_list);

// GET request: get one event by event id.
router.get("/:id", event_controller.event_detail);

module.exports = router;