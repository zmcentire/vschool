const mongoose = require('mongoose');
const Schema = mongoose.Schema

const concertSchema = new Schema({
    artist: {
        type: String,
    },
    venue: {
        type: String,
    },
    time: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('concert', concertSchema)