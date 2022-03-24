const { request, response } = require("express")
const { Game, Prize } = require('../models')


const getPrizes =  async (req, res) => {

    let prizes = await Prize.find()
    res.json(prizes)


}

const pullBoughtPrizes = (req, res) => {

    let prizes = Prize.find({bought:true})

    res.send(prizes)


}






// const getPrize = (req, res) => {

//     let 

//     response.send({
//      message: `Congratulations Winner! Here's your `

//     })
// },

module.exports ={
    getPrizes,
    pullBoughtPrizes
 //getPrize
}