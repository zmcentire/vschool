const express = require('express')
const uuid = require("uuid/v4")
const app = express()

app.use(express)


const PORT = 8000

const todos = []

app.get('/', (req, res) => {
    console.log("end point hit")
    res.send("hello world!")
})

app.post('/', (req, res) => {
    database.push(req.body)
    res.send({
        itemAdded: req.body
    })
})

app.delete('/:_id', (req, res) => {
    let {_id} = req.params
    let index = database.findIndex(spot => spot._id)
})

app.put('/:_id', (req, res) => {
    let {_id} =req.params
    let update = req.body 
    database.forEach(spot => {
        if(spot._id === _id){
            object.assign(spot, update)
        }
    })
})

app.listen(PORT, () => {
    console.log("App is running on port" + PORT)
})