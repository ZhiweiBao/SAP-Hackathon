const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    type: String,
    date: Date,
    location: String,
    context: String,
    pointsToGain: Number,
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    creator: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model('Event', EventSchema);