const Event = require("../models/event");

// GET request: get all events as a list
exports.event_list = function (req, res) {
  Event.find()
    .sort({date: -1})
    .exec(function (err, event_list) {
      if (err) {
        return res.status(500).json({message: err});
      }
      res.status(200).json(event_list);
    })
}

// GET request: get all events sort by number of attendees.
exports.event_list_sort_by_attendees_length = function (req, res) {
  Event.find()
    .sort({attendeeNumber: -1})
    .exec(function (err, event_list) {
      if (err) {
        return res.status(500).json({message: err});
      }
      res.status(200).json(event_list);
    })
}

// GET request: get all events filter by title and sort by attendees number
exports.event_list_filter_by_title = function (req, res) {
  Event.find({
    title: new RegExp(req.params.title, "i")
  })
    .sort({attendees: -1})
    .exec(function (err, event_list) {
      if (err) {
        return res.status(500).json({message: err});
      }
      res.status(200).json(event_list);
    })
}

// GET request: get one event by Id.
exports.event_detail = function (req, res) {
  Event.findById(req.params.id).exec(function (err, event) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(event);
  });
};

// PUT request: add attendee by user_id
exports.event_add_attendee = function (req, res) {
  Event.findByIdAndUpdate(req.params.id,
    {
      $addToSet: {
        attendees: req.params.user_id
      }
    },
    {new: true},
    function (err, newEvent) {
      err ? res.status(500).json({message: err}) : res.status(200).json(newEvent);
    }
  )
}

// PUT request: remove attendee by user id
exports.event_remove_attendee = function (req, res) {
  Event.findByIdAndUpdate(req.params.id,
    {
      $pull: {
        attendees: req.params.user_id
      }
    },
    {new: true},
    function (err, newEvent) {
      err ? res.status(500).json({message: err}) : res.status(200).json(newEvent);
    }
  )
}