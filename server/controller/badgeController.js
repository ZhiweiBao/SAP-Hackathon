const Badge = require("../models/badge");

// GET request: get all badges as a list
exports.badge_list = function (req, res) {
  Badge.find().exec(function (err, badge_list) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(badge_list);
  })
}

// GET request: get one badge by Id.
exports.badge_detail = function (req, res) {
  Badge.findById(req.params.id).exec(function (err, badge) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(badge);
  });
};