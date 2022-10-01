const Event = require("../models/event");

// GET request: get one event by Id.
exports.event_detail = function (req, res, next) {
    Event.findById(req.params.id).exec(function (err, user) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(Event);
    });
};