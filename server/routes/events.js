var express = require('express');
var router = express.Router();
const event_controller = require("../controller/eventController");

/* GET events listing. */
router.get('/', event_controller.event_list);

// GET request: get events sort by number of attendees.
router.get("/popular", event_controller.event_list_sort_by_attendees_length);

// GET request: get events by title.
router.get("/title/:title", event_controller.event_list_filter_by_title);

// GET request: get one event by event id.
router.get("/:id", event_controller.event_detail);

//GET request: get event list by attendee id
router.get("/user/:user_id", event_controller.event_list_by_user_id)

// PUT request: add attendee to event
router.put("/:id/addAttendee/:user_id", event_controller.event_add_attendee);

// PUT request: remove attendee to event
router.put("/:id/removeAttendee/:user_id", event_controller.event_remove_attendee);

module.exports = router;