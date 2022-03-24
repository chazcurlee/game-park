const { Schema } = require('mongoose')

const Game = new Schema(
    {
        activityType: { type: String, required: true },
        returnedTicket: {
            type: Number, require: true }
    },
    { timestamps: true}
)

module.exports = Game