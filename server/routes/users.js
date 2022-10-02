var express = require('express');
var router = express.Router();
const user_controller = require("../controller/userController");

/* GET users listing. */
router.get('/', user_controller.user_list);

// GET request: get one user by user id.
router.get("/:id", user_controller.user_detail);

// GET request: get one user by user email.
router.get("/email/:email", user_controller.user_detail_by_email);

module.exports = router;
