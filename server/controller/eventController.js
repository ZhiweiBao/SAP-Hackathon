const Event = require("../models/event");

// GET request: get all events as a list
exports.event_list = function (req, res, next) {
    Event.find().exec(function (err, event_list) {
        if (err) {
            return res.status(500).json({ message: err });
        }
        res.status(200).json(event_list);
    })
}

// GET request: get one event by Id.
exports.event_detail = function (req, res, next) {
    Event.findById(req.params.id).exec(function (err, event) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(event);
    });
};