const { Schema } = require('mongoose')

const Prize = new Schema(
    {
        // Id:---??
        cost: { type: Integer, required: true},
        name: { type: String, required: true},
        img: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Prize