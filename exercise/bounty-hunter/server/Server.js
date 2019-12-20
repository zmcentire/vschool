const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json())
const mongoose = require('mongoose')

app.use('/bounty', require('./BountyRouter'))

mongoose.connect('mongodb://localhost27017/bountyHunter', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})