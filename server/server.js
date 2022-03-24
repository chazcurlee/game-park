const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))



const prizeController = require('./controllers/prizeController')

app.get('/prizes',  prizeController.getPrizes)






app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}` ))
