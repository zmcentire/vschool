const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 8080


mongoose.connect('mongodb://localhost:27017/crudstore', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDB is Running")
    })
    .catch(err => {
        console.log(err)
    })
    
app.use(express.json())

app.use('/Inventory', require('./Routes/Inventory.js'))



app.listen(port, () => {
    console.log(`running on port ${port}`)
})