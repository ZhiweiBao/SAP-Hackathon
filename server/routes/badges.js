var express = require('express');
var router = express.Router();
const badge_controller = require("../controller/badgeController");

/* GET badges listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// GET request: get one badge by badge id.
router.get("/:id", badge_controller.badge_detail);

module.exports = router;