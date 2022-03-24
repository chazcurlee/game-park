const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db')



app.get('get-token', (req, res) => {




})

app.get('games-n-rides', (req, res) => {



})


app.get('rewards-get', (req, res) => {



})

app.get('showcase', (req, res) => {



    
})




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}` ))
