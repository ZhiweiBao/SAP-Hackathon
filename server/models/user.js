const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

module.exports = mongoose.model('User', UserSchema);