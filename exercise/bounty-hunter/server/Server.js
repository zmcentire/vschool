const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json())

app.use('/bounty', require('./BountyRouter'))

mongoose.connect()


app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})