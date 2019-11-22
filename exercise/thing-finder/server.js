const express = require('express')
const app = express()
const port = 8080
const items = require('./items.json')

app.use(express.json())

app.get('/item', (req, res) => {
    if(req.query.name){
        res.send(items.filter(item => item.name === req.query.name))
    } else if(req.query.type){
        res.send(items.filter(item => item.type === req.query.type))
    } else if(req.query.price){
        res.send(items.filter(item => item.price === +req.query.price))
    }else {
        res.send(items)
    }
})



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})