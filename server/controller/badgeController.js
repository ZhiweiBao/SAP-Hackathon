const Badge = require("../models/badge");

// GET request: get one badge by Id.
exports.badge_detail = function (req, res, next) {
    Badge.findById(req.params.id).exec(function (err, user) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(Badge);
    });
};