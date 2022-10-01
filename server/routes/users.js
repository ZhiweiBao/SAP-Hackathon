var express = require('express');
var router = express.Router();
const user_controller = require("../controller/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET request: get one user by user id.
router.get("/:id", user_controller.user_detail);

module.exports = router;
