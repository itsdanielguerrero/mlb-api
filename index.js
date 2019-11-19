const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const PORT = process.env.PORT || 1338

app.use(bodyParser.json())

//get all players
app.get('/players', (req, res) => {
    models.Players.findAll({}).then((player) => {
        res.send(player)
    })
})

//homepage
app.get('/', (req, res) => {
    res.send('Welcom to my MLB API APP!!!!!')
})

//default page
app.all('*', (req, res) => {
    res.send("OOPS! Did you find what you were looking for?")
})

//listen to port for our web app
app.listen(PORT, () => {
    console.log('Server is up and Running!')
})