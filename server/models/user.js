const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name: String,
    last_name: String,
    organization: String,
    location: String,
    total_points: Number,
    badges: [{ type: Schema.Types.ObjectId, ref: "Badge" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = mongoose.model('User', UserSchema);