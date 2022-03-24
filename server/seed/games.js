const db = require('../db')
const { Game } = require('.../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const games = [
        {
            activityType: 'Game',
            returnedTicket: '3'
        },
       {
           activityType: 'Ride',
           returnedTicket: '4'
       }
    ]
    await Game.insertMany(games)
    console.log('Games and Rides Arrived')
}

const run = async () => {
    await main()
    db.close()
}

run()
