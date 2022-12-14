const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
    title: String,
    rule: String,
    required_event_type: String,
    month: Date,
    badge: { type: Schema.Types.ObjectId, ref: "Badge" },
});

module.exports = mongoose.model('Challenge', ChallengeSchema);