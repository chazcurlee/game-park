const db = require('../db')
const { Prize } = require('..models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const prizes =[
        {
           cost: 3,
           name: "banans",
           img:"url"
          
        },
        {
            cost: 3,
           name: "banans",
           img:"url"
        },
        {
            cost: 3,
           name: "banans",
           img:"url"
        },
        {
            cost: 3,
           name: "banans",
           img:"url"
        }

    ]
    await Prize.insertMany(prizes)
    console.log("here are the prizes!")
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()