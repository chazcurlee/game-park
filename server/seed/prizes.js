const db = require('../db')
const { Prize } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const prizes =[
        {
           cost: 3,
           name: "Rasta Banana",
           img:'https://i.imgur.com/F84yv0K.png',
           bought:false
          
        },
        {
            cost: 3,
           name: "Teddy Bear",
           img:"https://i.imgur.com/GEwjEYH.png",
           bought:false
        },
        {
            cost: 3,
           name: "A Totally Real Car",
           img:"https://i.imgur.com/V5Vw9Ik.png",
           bought:false
        },
        {
            cost: 3,
           name: "Chicken",
           img:"https://i.imgur.com/KO6oilE.png",
           bought:false
        },
        {
            cost: 3,
           name: "Goldfish",
           img:"https://i.imgur.com/olsQrkE.png",
           bought:false
        },
        {
            cost: 3,
           name: "Watch",
           img:"https://i.imgur.com/PzprEHO.png",
           bought:false
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