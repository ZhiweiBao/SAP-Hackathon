var express = require('express');
var router = express.Router();
const event_controller = require("../controller/eventController");

/* GET events listing. */
router.get('/', event_controller.event_list);

// GET request: get one event by event id.
router.get("/:id", event_controller.event_detail);

// PUT request: add attendee to event
router.put("/:id/addAttendee/:user_id", event_controller.event_add_attendee);

// PUT request: remove attendee to event
router.put("/:id/removeAttendee/:user_id", event_controller.event_remove_attendee);

module.exports = router;