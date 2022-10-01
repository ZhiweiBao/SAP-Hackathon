const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Badge = require('./badge');
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    lastName: String,
    organization: String,
    location: String,
    totalPoints: Number,
    arrayOfBadges: [{ type: Schema.Types.ObjectId, ref: "Badge" }],
    arrayOfEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);