const db = require('../db')
const { Prize } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const prizes =[
        {
           cost: 3,
           name: "Mr. Bear",
           img:"https://i.pinimg.com/736x/f5/2a/40/f52a4005be58e5d4aa5a3aceda1e0f59--carnival-prizes-yellow-and-brown.jpg",
           bought:false
          
        },
        // {
        //     cost: 3,
        //    name: "banans",
        //    img:"url",
        //    bought:false
        // },
        // {
        //     cost: 3,
        //    name: "banans",
        //    img:"url",
        //    bought:false
        // },
        // {
        //     cost: 3,
        //    name: "banans",
        //    img:"url",
        //    bought:false
        // }

    ]
    await Prize.insertMany(prizes)
    console.log("here are the prizes!")
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()