const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    type: String,
    date: Date,
    location: String,
    context: String,
    points: Number,
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    creator: { type: Schema.Types.ObjectId, ref: "User" },
});

// Virtual for number of attendees.
EventSchema.virtual("attendeeNumber").get(function () {
    return this.attendees.length;
});

module.exports = mongoose.model('Event', EventSchema);