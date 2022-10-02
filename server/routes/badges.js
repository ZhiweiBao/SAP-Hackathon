var express = require('express');
var router = express.Router();
const badge_controller = require("../controller/badgeController");

/* GET badges listing. */
router.get('/', badge_controller.badge_list);

// GET request: get one badge by badge id.
router.get("/:id", badge_controller.badge_detail);

module.exports = router;