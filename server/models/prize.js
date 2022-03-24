const { Schema } = require('mongoose')

const Prize = new Schema(
    {
        // Id:---??
        cost: { type: Number, required: true},
        name: { type: String, required: true},
        img: { type: String, required: true},
        bought: { type: Boolean, required: true}
    },
    {timestamps: true}
)

module.exports = Prize