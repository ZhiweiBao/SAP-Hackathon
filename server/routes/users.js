var express = require('express');
var router = express.Router();
const user_controller = require("../controller/userController");

/* GET users listing. */
router.get('/', user_controller.user_list);

// GET request: list users by total points
router.get('/sortByTotalPoints', user_controller.user_list_by_total_points);

// GET request: get one user by user id.
router.get("/:id", user_controller.user_detail);

// GET request: get one user by user email.
router.get("/email/:email", user_controller.user_detail_by_email);

// PUT request: add event to user
router.put("/:id/addEvent/:event_id", user_controller.user_add_event);

// PUT request: remove event to user
router.put("/:id/removeEvent/:event_id", user_controller.user_remove_event);

module.exports = router;
