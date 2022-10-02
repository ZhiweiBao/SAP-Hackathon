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
    badges: [{type: Schema.Types.ObjectId, ref: "Badge"}],
    events: [{type: Schema.Types.ObjectId, ref: "Event"}],
});

// Virtual for User full name.
UserSchema.virtual("name").get(function () {
    return this.first_name + " " + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);