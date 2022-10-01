const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const passportLocalMongoose = require('passport-local-mongoose');

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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Event', EventSchema);