const mongoose = require('mongoose')
const GameSchema = require('./game')
const PrizeSchema = require('./prize')

const Game = mongoose.model('Game', GameSchema)

const Prize = mongoose.model('Prize', PrizeSchema)

module.exports = {
    Game,
    Prize
}