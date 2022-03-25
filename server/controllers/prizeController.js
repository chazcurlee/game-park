const { request, response } = require("express")
const { Game, Prize } = require('../models')


const getPrizes =  async (req, res) => {

    let prizes = await Prize.find()
    res.json(prizes)


}

const pullBoughtPrizes = async (req, res) => {

    let prizes = await Prize.find({bought:true})

    res.send(prizes)


}


const postPrizes = async (req, res) => {

    let prize = new Prize()

    prize.cost = req.body.cost
    prize.name = req.body.name
    prize.img = req.body.img
    prize.bought = req.body.bought

    prize.save()

}




module.exports ={
    getPrizes,
    pullBoughtPrizes,
    postPrizes
}