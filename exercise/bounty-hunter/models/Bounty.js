const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    living: Boolean,
    bountyAmount: {
        type: Number,
        default: 0
    },
    type: String
})

module.exports = mongoose.model('bounty', bountySchema)